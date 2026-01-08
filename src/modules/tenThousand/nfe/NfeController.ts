import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfe")
export default class NfeController {
  @operation({
    summary: "Get Nfe",
  })
  @get()
  static getNfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfe",
  })
  @post("{id}")
  static createNfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
