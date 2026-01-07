import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idc")
export default class IdcController {
  @operation({
    summary: "Get Idc",
  })
  @get()
  static getIdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idc",
  })
  @post("{id}")
  static createIdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
