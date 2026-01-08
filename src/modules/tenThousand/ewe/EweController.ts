import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewe")
export default class EweController {
  @operation({
    summary: "Get Ewe",
  })
  @get()
  static getEwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewe",
  })
  @post("{id}")
  static createEwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
