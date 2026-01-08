import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfj")
export default class CfjController {
  @operation({
    summary: "Get Cfj",
  })
  @get()
  static getCfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfj",
  })
  @post("{id}")
  static createCfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
