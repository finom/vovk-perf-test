import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecl")
export default class EclController {
  @operation({
    summary: "Get Ecl",
  })
  @get()
  static getEcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecl",
  })
  @post("{id}")
  static createEcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
