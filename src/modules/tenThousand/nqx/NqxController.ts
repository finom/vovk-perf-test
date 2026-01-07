import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqx")
export default class NqxController {
  @operation({
    summary: "Get Nqx",
  })
  @get()
  static getNqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqx",
  })
  @post("{id}")
  static createNqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
