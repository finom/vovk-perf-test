import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erf")
export default class ErfController {
  @operation({
    summary: "Get Erf",
  })
  @get()
  static getErf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erf",
  })
  @post("{id}")
  static createErf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
