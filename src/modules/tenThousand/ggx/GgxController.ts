import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggx")
export default class GgxController {
  @operation({
    summary: "Get Ggx",
  })
  @get()
  static getGgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggx",
  })
  @post("{id}")
  static createGgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
