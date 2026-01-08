import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmc")
export default class NmcController {
  @operation({
    summary: "Get Nmc",
  })
  @get()
  static getNmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmc",
  })
  @post("{id}")
  static createNmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
