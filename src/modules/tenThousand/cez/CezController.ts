import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cez")
export default class CezController {
  @operation({
    summary: "Get Cez",
  })
  @get()
  static getCez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cez",
  })
  @post("{id}")
  static createCez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
