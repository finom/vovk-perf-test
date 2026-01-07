import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npp")
export default class NppController {
  @operation({
    summary: "Get Npp",
  })
  @get()
  static getNpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npp",
  })
  @post("{id}")
  static createNpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
