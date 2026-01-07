import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brf")
export default class BrfController {
  @operation({
    summary: "Get Brf",
  })
  @get()
  static getBrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brf",
  })
  @post("{id}")
  static createBrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
