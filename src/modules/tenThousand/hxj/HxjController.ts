import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxj")
export default class HxjController {
  @operation({
    summary: "Get Hxj",
  })
  @get()
  static getHxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxj",
  })
  @post("{id}")
  static createHxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
