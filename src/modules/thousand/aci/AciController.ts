import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aci")
export default class AciController {
  @operation({
    summary: "Get Aci",
  })
  @get()
  static getAci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aci",
  })
  @post("{id}")
  static createAci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
