import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsd")
export default class NsdController {
  @operation({
    summary: "Get Nsd",
  })
  @get()
  static getNsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsd",
  })
  @post("{id}")
  static createNsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
