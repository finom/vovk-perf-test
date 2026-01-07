import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnm")
export default class CnmController {
  @operation({
    summary: "Get Cnm",
  })
  @get()
  static getCnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnm",
  })
  @post("{id}")
  static createCnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
