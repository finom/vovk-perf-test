import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzw")
export default class GzwController {
  @operation({
    summary: "Get Gzw",
  })
  @get()
  static getGzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzw",
  })
  @post("{id}")
  static createGzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
