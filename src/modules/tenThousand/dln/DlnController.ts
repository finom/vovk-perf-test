import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dln")
export default class DlnController {
  @operation({
    summary: "Get Dln",
  })
  @get()
  static getDln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dln",
  })
  @post("{id}")
  static createDln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
