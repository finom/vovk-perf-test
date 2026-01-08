import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csp")
export default class CspController {
  @operation({
    summary: "Get Csp",
  })
  @get()
  static getCsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csp",
  })
  @post("{id}")
  static createCsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
