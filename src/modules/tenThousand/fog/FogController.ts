import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
