import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azs")
export default class AzsController {
  @operation({
    summary: "Get Azs",
  })
  @get()
  static getAzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azs",
  })
  @post("{id}")
  static createAzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
