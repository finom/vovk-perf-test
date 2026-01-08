import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nne")
export default class NneController {
  @operation({
    summary: "Get Nne",
  })
  @get()
  static getNne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nne",
  })
  @post("{id}")
  static createNne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
