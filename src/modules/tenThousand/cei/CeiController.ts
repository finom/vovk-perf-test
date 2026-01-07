import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cei")
export default class CeiController {
  @operation({
    summary: "Get Cei",
  })
  @get()
  static getCei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cei",
  })
  @post("{id}")
  static createCei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
