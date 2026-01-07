import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agn")
export default class AgnController {
  @operation({
    summary: "Get Agn",
  })
  @get()
  static getAgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agn",
  })
  @post("{id}")
  static createAgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
