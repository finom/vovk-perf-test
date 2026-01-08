import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfz")
export default class CfzController {
  @operation({
    summary: "Get Cfz",
  })
  @get()
  static getCfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfz",
  })
  @post("{id}")
  static createCfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
