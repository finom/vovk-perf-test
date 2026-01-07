import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irf")
export default class IrfController {
  @operation({
    summary: "Get Irf",
  })
  @get()
  static getIrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irf",
  })
  @post("{id}")
  static createIrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
