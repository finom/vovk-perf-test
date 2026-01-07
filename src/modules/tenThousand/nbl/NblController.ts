import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbl")
export default class NblController {
  @operation({
    summary: "Get Nbl",
  })
  @get()
  static getNbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbl",
  })
  @post("{id}")
  static createNbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
