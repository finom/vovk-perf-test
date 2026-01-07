import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfe")
export default class NfeController {
  @operation({
    summary: "Get Nfe",
  })
  @get()
  static getNfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfe",
  })
  @post("{id}")
  static createNfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
