import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efx")
export default class EfxController {
  @operation({
    summary: "Get Efx",
  })
  @get()
  static getEfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efx",
  })
  @post("{id}")
  static createEfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
