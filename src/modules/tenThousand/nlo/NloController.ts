import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlo")
export default class NloController {
  @operation({
    summary: "Get Nlo",
  })
  @get()
  static getNlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlo",
  })
  @post("{id}")
  static createNlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
