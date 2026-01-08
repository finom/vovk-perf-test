import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkb")
export default class GkbController {
  @operation({
    summary: "Get Gkb",
  })
  @get()
  static getGkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkb",
  })
  @post("{id}")
  static createGkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
