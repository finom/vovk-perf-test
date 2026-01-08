import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crm")
export default class CrmController {
  @operation({
    summary: "Get Crm",
  })
  @get()
  static getCrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crm",
  })
  @post("{id}")
  static createCrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
