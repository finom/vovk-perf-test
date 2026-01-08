import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmi")
export default class NmiController {
  @operation({
    summary: "Get Nmi",
  })
  @get()
  static getNmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmi",
  })
  @post("{id}")
  static createNmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
