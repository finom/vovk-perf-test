import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cw")
export default class CwController {
  @operation({
    summary: "Get Cw",
  })
  @get()
  static getCw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cw",
  })
  @post("{id}")
  static createCw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
