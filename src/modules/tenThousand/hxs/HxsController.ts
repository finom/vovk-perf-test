import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxs")
export default class HxsController {
  @operation({
    summary: "Get Hxs",
  })
  @get()
  static getHxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxs",
  })
  @post("{id}")
  static createHxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
