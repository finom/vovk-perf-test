import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdu")
export default class BduController {
  @operation({
    summary: "Get Bdu",
  })
  @get()
  static getBdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdu",
  })
  @post("{id}")
  static createBdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
