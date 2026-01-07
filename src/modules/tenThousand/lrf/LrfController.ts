import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrf")
export default class LrfController {
  @operation({
    summary: "Get Lrf",
  })
  @get()
  static getLrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrf",
  })
  @post("{id}")
  static createLrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
