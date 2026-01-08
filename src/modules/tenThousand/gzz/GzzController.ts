import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzz")
export default class GzzController {
  @operation({
    summary: "Get Gzz",
  })
  @get()
  static getGzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzz",
  })
  @post("{id}")
  static createGzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
