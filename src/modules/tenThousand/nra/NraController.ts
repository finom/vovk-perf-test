import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nra")
export default class NraController {
  @operation({
    summary: "Get Nra",
  })
  @get()
  static getNra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nra",
  })
  @post("{id}")
  static createNra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
