import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnz")
export default class CnzController {
  @operation({
    summary: "Get Cnz",
  })
  @get()
  static getCnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnz",
  })
  @post("{id}")
  static createCnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
