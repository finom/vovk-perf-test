import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckw")
export default class CkwController {
  @operation({
    summary: "Get Ckw",
  })
  @get()
  static getCkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckw",
  })
  @post("{id}")
  static createCkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
