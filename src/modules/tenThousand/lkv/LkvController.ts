import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkv")
export default class LkvController {
  @operation({
    summary: "Get Lkv",
  })
  @get()
  static getLkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkv",
  })
  @post("{id}")
  static createLkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
