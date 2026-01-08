import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egw")
export default class EgwController {
  @operation({
    summary: "Get Egw",
  })
  @get()
  static getEgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egw",
  })
  @post("{id}")
  static createEgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
