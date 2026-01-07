import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfy")
export default class NfyController {
  @operation({
    summary: "Get Nfy",
  })
  @get()
  static getNfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfy",
  })
  @post("{id}")
  static createNfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
