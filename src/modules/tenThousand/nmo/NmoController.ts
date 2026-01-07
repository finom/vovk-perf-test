import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmo")
export default class NmoController {
  @operation({
    summary: "Get Nmo",
  })
  @get()
  static getNmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmo",
  })
  @post("{id}")
  static createNmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
