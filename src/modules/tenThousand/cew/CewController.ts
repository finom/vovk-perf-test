import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cew")
export default class CewController {
  @operation({
    summary: "Get Cew",
  })
  @get()
  static getCew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cew",
  })
  @post("{id}")
  static createCew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
