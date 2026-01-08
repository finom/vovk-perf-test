import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mez")
export default class MezController {
  @operation({
    summary: "Get Mez",
  })
  @get()
  static getMez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mez",
  })
  @post("{id}")
  static createMez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
