import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euj")
export default class EujController {
  @operation({
    summary: "Get Euj",
  })
  @get()
  static getEuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euj",
  })
  @post("{id}")
  static createEuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
