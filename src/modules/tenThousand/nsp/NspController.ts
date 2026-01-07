import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsp")
export default class NspController {
  @operation({
    summary: "Get Nsp",
  })
  @get()
  static getNsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsp",
  })
  @post("{id}")
  static createNsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
