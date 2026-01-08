import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csl")
export default class CslController {
  @operation({
    summary: "Get Csl",
  })
  @get()
  static getCsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csl",
  })
  @post("{id}")
  static createCsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
