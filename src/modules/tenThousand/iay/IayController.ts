import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iay")
export default class IayController {
  @operation({
    summary: "Get Iay",
  })
  @get()
  static getIay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iay",
  })
  @post("{id}")
  static createIay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
