import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nea")
export default class NeaController {
  @operation({
    summary: "Get Nea",
  })
  @get()
  static getNea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nea",
  })
  @post("{id}")
  static createNea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
