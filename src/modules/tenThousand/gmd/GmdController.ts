import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmd")
export default class GmdController {
  @operation({
    summary: "Get Gmd",
  })
  @get()
  static getGmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmd",
  })
  @post("{id}")
  static createGmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
