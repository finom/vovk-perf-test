import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iib")
export default class IibController {
  @operation({
    summary: "Get Iib",
  })
  @get()
  static getIib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iib",
  })
  @post("{id}")
  static createIib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
