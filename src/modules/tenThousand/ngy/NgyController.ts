import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngy")
export default class NgyController {
  @operation({
    summary: "Get Ngy",
  })
  @get()
  static getNgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngy",
  })
  @post("{id}")
  static createNgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
