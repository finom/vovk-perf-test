import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzx")
export default class GzxController {
  @operation({
    summary: "Get Gzx",
  })
  @get()
  static getGzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzx",
  })
  @post("{id}")
  static createGzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
