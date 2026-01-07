import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krf")
export default class KrfController {
  @operation({
    summary: "Get Krf",
  })
  @get()
  static getKrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krf",
  })
  @post("{id}")
  static createKrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
