import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrl")
export default class HrlController {
  @operation({
    summary: "Get Hrl",
  })
  @get()
  static getHrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrl",
  })
  @post("{id}")
  static createHrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
