import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrf")
export default class MrfController {
  @operation({
    summary: "Get Mrf",
  })
  @get()
  static getMrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrf",
  })
  @post("{id}")
  static createMrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
