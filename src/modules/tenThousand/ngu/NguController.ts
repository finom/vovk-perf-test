import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngu")
export default class NguController {
  @operation({
    summary: "Get Ngu",
  })
  @get()
  static getNgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngu",
  })
  @post("{id}")
  static createNgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
