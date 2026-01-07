import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixi")
export default class IxiController {
  @operation({
    summary: "Get Ixi",
  })
  @get()
  static getIxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixi",
  })
  @post("{id}")
  static createIxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
