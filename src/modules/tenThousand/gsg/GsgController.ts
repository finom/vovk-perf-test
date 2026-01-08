import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsg")
export default class GsgController {
  @operation({
    summary: "Get Gsg",
  })
  @get()
  static getGsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsg",
  })
  @post("{id}")
  static createGsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
