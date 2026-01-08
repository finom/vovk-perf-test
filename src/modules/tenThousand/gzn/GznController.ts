import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzn")
export default class GznController {
  @operation({
    summary: "Get Gzn",
  })
  @get()
  static getGzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzn",
  })
  @post("{id}")
  static createGzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
