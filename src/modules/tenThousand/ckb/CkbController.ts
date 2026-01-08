import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckb")
export default class CkbController {
  @operation({
    summary: "Get Ckb",
  })
  @get()
  static getCkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckb",
  })
  @post("{id}")
  static createCkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
