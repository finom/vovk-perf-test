import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nas")
export default class NasController {
  @operation({
    summary: "Get Nas",
  })
  @get()
  static getNas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nas",
  })
  @post("{id}")
  static createNas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
