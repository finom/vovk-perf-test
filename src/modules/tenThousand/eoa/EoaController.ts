import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoa")
export default class EoaController {
  @operation({
    summary: "Get Eoa",
  })
  @get()
  static getEoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoa",
  })
  @post("{id}")
  static createEoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
