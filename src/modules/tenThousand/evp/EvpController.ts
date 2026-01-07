import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evp")
export default class EvpController {
  @operation({
    summary: "Get Evp",
  })
  @get()
  static getEvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evp",
  })
  @post("{id}")
  static createEvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
