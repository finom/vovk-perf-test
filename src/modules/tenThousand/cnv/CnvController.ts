import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnv")
export default class CnvController {
  @operation({
    summary: "Get Cnv",
  })
  @get()
  static getCnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnv",
  })
  @post("{id}")
  static createCnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
