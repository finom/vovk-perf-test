import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eho")
export default class EhoController {
  @operation({
    summary: "Get Eho",
  })
  @get()
  static getEho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eho",
  })
  @post("{id}")
  static createEho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
