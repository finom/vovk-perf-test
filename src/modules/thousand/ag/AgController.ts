import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ag")
export default class AgController {
  @operation({
    summary: "Get Ag",
  })
  @get()
  static getAg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ag",
  })
  @post("{id}")
  static createAg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
