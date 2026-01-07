import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nko")
export default class NkoController {
  @operation({
    summary: "Get Nko",
  })
  @get()
  static getNko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nko",
  })
  @post("{id}")
  static createNko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
