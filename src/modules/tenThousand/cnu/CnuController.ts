import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnu")
export default class CnuController {
  @operation({
    summary: "Get Cnu",
  })
  @get()
  static getCnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnu",
  })
  @post("{id}")
  static createCnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
