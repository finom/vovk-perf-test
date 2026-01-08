import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nez")
export default class NezController {
  @operation({
    summary: "Get Nez",
  })
  @get()
  static getNez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nez",
  })
  @post("{id}")
  static createNez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
