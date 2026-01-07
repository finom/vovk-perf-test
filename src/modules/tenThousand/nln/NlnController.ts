import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nln")
export default class NlnController {
  @operation({
    summary: "Get Nln",
  })
  @get()
  static getNln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nln",
  })
  @post("{id}")
  static createNln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
