import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drf")
export default class DrfController {
  @operation({
    summary: "Get Drf",
  })
  @get()
  static getDrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drf",
  })
  @post("{id}")
  static createDrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
