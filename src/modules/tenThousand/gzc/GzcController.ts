import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzc")
export default class GzcController {
  @operation({
    summary: "Get Gzc",
  })
  @get()
  static getGzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzc",
  })
  @post("{id}")
  static createGzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
