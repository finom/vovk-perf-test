import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrf")
export default class JrfController {
  @operation({
    summary: "Get Jrf",
  })
  @get()
  static getJrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrf",
  })
  @post("{id}")
  static createJrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
