import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aew")
export default class AewController {
  @operation({
    summary: "Get Aew",
  })
  @get()
  static getAew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aew",
  })
  @post("{id}")
  static createAew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
