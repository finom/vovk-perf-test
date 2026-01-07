import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cln")
export default class ClnController {
  @operation({
    summary: "Get Cln",
  })
  @get()
  static getCln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cln",
  })
  @post("{id}")
  static createCln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
