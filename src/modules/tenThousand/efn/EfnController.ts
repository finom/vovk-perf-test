import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efn")
export default class EfnController {
  @operation({
    summary: "Get Efn",
  })
  @get()
  static getEfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efn",
  })
  @post("{id}")
  static createEfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
