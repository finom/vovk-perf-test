import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehr")
export default class EhrController {
  @operation({
    summary: "Get Ehr",
  })
  @get()
  static getEhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehr",
  })
  @post("{id}")
  static createEhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
