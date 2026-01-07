import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnb")
export default class CnbController {
  @operation({
    summary: "Get Cnb",
  })
  @get()
  static getCnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnb",
  })
  @post("{id}")
  static createCnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
