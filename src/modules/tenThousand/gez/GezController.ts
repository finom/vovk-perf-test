import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gez")
export default class GezController {
  @operation({
    summary: "Get Gez",
  })
  @get()
  static getGez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gez",
  })
  @post("{id}")
  static createGez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
