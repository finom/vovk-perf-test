import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzo")
export default class HzoController {
  @operation({
    summary: "Get Hzo",
  })
  @get()
  static getHzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzo",
  })
  @post("{id}")
  static createHzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
