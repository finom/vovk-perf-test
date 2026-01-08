import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvs")
export default class GvsController {
  @operation({
    summary: "Get Gvs",
  })
  @get()
  static getGvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvs",
  })
  @post("{id}")
  static createGvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
