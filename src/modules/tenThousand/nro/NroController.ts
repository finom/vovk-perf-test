import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nro")
export default class NroController {
  @operation({
    summary: "Get Nro",
  })
  @get()
  static getNro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nro",
  })
  @post("{id}")
  static createNro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
