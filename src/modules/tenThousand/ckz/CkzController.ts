import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckz")
export default class CkzController {
  @operation({
    summary: "Get Ckz",
  })
  @get()
  static getCkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckz",
  })
  @post("{id}")
  static createCkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
