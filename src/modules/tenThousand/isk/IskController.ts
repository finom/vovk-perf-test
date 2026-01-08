import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isk")
export default class IskController {
  @operation({
    summary: "Get Isk",
  })
  @get()
  static getIsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isk",
  })
  @post("{id}")
  static createIsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
