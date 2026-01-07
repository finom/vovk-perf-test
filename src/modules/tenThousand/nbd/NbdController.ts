import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbd")
export default class NbdController {
  @operation({
    summary: "Get Nbd",
  })
  @get()
  static getNbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbd",
  })
  @post("{id}")
  static createNbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
