import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nol")
export default class NolController {
  @operation({
    summary: "Get Nol",
  })
  @get()
  static getNol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nol",
  })
  @post("{id}")
  static createNol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
