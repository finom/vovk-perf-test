import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkx")
export default class GkxController {
  @operation({
    summary: "Get Gkx",
  })
  @get()
  static getGkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkx",
  })
  @post("{id}")
  static createGkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
