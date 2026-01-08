import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckd")
export default class CkdController {
  @operation({
    summary: "Get Ckd",
  })
  @get()
  static getCkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckd",
  })
  @post("{id}")
  static createCkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
