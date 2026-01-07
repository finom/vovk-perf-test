import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhn")
export default class NhnController {
  @operation({
    summary: "Get Nhn",
  })
  @get()
  static getNhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhn",
  })
  @post("{id}")
  static createNhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
