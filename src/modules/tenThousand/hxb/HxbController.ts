import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxb")
export default class HxbController {
  @operation({
    summary: "Get Hxb",
  })
  @get()
  static getHxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxb",
  })
  @post("{id}")
  static createHxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
