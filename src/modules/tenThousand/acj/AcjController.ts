import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acj")
export default class AcjController {
  @operation({
    summary: "Get Acj",
  })
  @get()
  static getAcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acj",
  })
  @post("{id}")
  static createAcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
