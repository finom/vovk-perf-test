import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwe")
export default class CweController {
  @operation({
    summary: "Get Cwe",
  })
  @get()
  static getCwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwe",
  })
  @post("{id}")
  static createCwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
