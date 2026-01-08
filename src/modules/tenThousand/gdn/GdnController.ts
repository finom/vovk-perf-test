import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdn")
export default class GdnController {
  @operation({
    summary: "Get Gdn",
  })
  @get()
  static getGdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdn",
  })
  @post("{id}")
  static createGdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
