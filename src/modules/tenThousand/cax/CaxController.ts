import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cax")
export default class CaxController {
  @operation({
    summary: "Get Cax",
  })
  @get()
  static getCax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cax",
  })
  @post("{id}")
  static createCax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
