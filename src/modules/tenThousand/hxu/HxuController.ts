import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxu")
export default class HxuController {
  @operation({
    summary: "Get Hxu",
  })
  @get()
  static getHxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxu",
  })
  @post("{id}")
  static createHxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
