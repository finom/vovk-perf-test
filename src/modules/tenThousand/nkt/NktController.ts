import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkt")
export default class NktController {
  @operation({
    summary: "Get Nkt",
  })
  @get()
  static getNkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkt",
  })
  @post("{id}")
  static createNkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
