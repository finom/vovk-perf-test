import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iga")
export default class IgaController {
  @operation({
    summary: "Get Iga",
  })
  @get()
  static getIga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iga",
  })
  @post("{id}")
  static createIga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
