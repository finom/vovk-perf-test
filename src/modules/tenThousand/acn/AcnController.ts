import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acn")
export default class AcnController {
  @operation({
    summary: "Get Acn",
  })
  @get()
  static getAcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acn",
  })
  @post("{id}")
  static createAcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
