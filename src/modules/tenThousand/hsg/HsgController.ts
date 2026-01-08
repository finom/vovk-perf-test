import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsg")
export default class HsgController {
  @operation({
    summary: "Get Hsg",
  })
  @get()
  static getHsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsg",
  })
  @post("{id}")
  static createHsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
