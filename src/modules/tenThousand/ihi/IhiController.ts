import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihi")
export default class IhiController {
  @operation({
    summary: "Get Ihi",
  })
  @get()
  static getIhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihi",
  })
  @post("{id}")
  static createIhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
