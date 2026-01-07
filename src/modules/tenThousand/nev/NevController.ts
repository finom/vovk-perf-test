import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nev")
export default class NevController {
  @operation({
    summary: "Get Nev",
  })
  @get()
  static getNev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nev",
  })
  @post("{id}")
  static createNev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
