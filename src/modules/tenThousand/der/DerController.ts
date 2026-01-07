import { procedure, prefix, get, post, operation } from "vovk";

@prefix("der")
export default class DerController {
  @operation({
    summary: "Get Der",
  })
  @get()
  static getDer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Der",
  })
  @post("{id}")
  static createDer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
