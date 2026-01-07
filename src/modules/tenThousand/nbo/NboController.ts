import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbo")
export default class NboController {
  @operation({
    summary: "Get Nbo",
  })
  @get()
  static getNbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbo",
  })
  @post("{id}")
  static createNbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
