import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gum")
export default class GumController {
  @operation({
    summary: "Get Gum",
  })
  @get()
  static getGum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gum",
  })
  @post("{id}")
  static createGum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
