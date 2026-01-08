import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glu")
export default class GluController {
  @operation({
    summary: "Get Glu",
  })
  @get()
  static getGlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glu",
  })
  @post("{id}")
  static createGlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
