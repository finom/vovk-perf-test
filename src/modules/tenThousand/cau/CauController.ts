import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cau")
export default class CauController {
  @operation({
    summary: "Get Cau",
  })
  @get()
  static getCau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cau",
  })
  @post("{id}")
  static createCau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
