import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyz")
export default class IyzController {
  @operation({
    summary: "Get Iyz",
  })
  @get()
  static getIyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyz",
  })
  @post("{id}")
  static createIyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
