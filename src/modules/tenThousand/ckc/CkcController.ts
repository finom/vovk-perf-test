import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckc")
export default class CkcController {
  @operation({
    summary: "Get Ckc",
  })
  @get()
  static getCkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckc",
  })
  @post("{id}")
  static createCkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
