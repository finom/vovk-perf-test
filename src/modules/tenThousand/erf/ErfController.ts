import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erf")
export default class ErfController {
  @operation({
    summary: "Get Erf",
  })
  @get()
  static getErf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erf",
  })
  @post("{id}")
  static createErf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
