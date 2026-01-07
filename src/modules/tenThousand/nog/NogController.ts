import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nog")
export default class NogController {
  @operation({
    summary: "Get Nog",
  })
  @get()
  static getNog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nog",
  })
  @post("{id}")
  static createNog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
