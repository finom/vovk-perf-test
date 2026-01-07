import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewr")
export default class EwrController {
  @operation({
    summary: "Get Ewr",
  })
  @get()
  static getEwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewr",
  })
  @post("{id}")
  static createEwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
