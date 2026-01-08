import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzh")
export default class GzhController {
  @operation({
    summary: "Get Gzh",
  })
  @get()
  static getGzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzh",
  })
  @post("{id}")
  static createGzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
