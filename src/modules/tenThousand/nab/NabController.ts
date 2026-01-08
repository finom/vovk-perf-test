import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nab")
export default class NabController {
  @operation({
    summary: "Get Nab",
  })
  @get()
  static getNab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nab",
  })
  @post("{id}")
  static createNab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
