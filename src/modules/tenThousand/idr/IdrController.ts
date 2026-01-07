import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idr")
export default class IdrController {
  @operation({
    summary: "Get Idr",
  })
  @get()
  static getIdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idr",
  })
  @post("{id}")
  static createIdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
