import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fog")
export default class FogController {
  @operation({
    summary: "Get Fog",
  })
  @get()
  static getFog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fog",
  })
  @post("{id}")
  static createFog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
