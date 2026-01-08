import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezs")
export default class EzsController {
  @operation({
    summary: "Get Ezs",
  })
  @get()
  static getEzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezs",
  })
  @post("{id}")
  static createEzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
