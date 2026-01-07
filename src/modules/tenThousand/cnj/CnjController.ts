import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnj")
export default class CnjController {
  @operation({
    summary: "Get Cnj",
  })
  @get()
  static getCnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnj",
  })
  @post("{id}")
  static createCnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
