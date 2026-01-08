import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gub")
export default class GubController {
  @operation({
    summary: "Get Gub",
  })
  @get()
  static getGub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gub",
  })
  @post("{id}")
  static createGub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
