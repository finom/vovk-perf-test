import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckv")
export default class CkvController {
  @operation({
    summary: "Get Ckv",
  })
  @get()
  static getCkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckv",
  })
  @post("{id}")
  static createCkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
