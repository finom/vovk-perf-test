import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nti")
export default class NtiController {
  @operation({
    summary: "Get Nti",
  })
  @get()
  static getNti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nti",
  })
  @post("{id}")
  static createNti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
