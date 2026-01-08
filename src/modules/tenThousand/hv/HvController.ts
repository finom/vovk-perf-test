import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hv")
export default class HvController {
  @operation({
    summary: "Get Hv",
  })
  @get()
  static getHv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hv",
  })
  @post("{id}")
  static createHv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
