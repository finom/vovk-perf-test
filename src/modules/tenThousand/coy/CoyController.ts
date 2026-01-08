import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coy")
export default class CoyController {
  @operation({
    summary: "Get Coy",
  })
  @get()
  static getCoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coy",
  })
  @post("{id}")
  static createCoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
