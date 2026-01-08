import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("niz")
export default class NizController {
  @operation({
    summary: "Get Niz",
  })
  @get()
  static getNiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niz",
  })
  @post("{id}")
  static createNiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
