import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ias")
export default class IasController {
  @operation({
    summary: "Get Ias",
  })
  @get()
  static getIas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ias",
  })
  @post("{id}")
  static createIas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
