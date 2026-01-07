import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ior")
export default class IorController {
  @operation({
    summary: "Get Ior",
  })
  @get()
  static getIor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ior",
  })
  @post("{id}")
  static createIor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
