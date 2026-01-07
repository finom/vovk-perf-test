import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nb")
export default class NbController {
  @operation({
    summary: "Get Nb",
  })
  @get()
  static getNb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nb",
  })
  @post("{id}")
  static createNb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
