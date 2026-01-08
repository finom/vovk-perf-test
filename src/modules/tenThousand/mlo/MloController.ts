import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlo")
export default class MloController {
  @operation({
    summary: "Get Mlo",
  })
  @get()
  static getMlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlo",
  })
  @post("{id}")
  static createMlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
