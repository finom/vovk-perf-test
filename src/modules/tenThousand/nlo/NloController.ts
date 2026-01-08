import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlo")
export default class NloController {
  @operation({
    summary: "Get Nlo",
  })
  @get()
  static getNlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlo",
  })
  @post("{id}")
  static createNlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
