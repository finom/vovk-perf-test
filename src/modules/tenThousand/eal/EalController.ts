import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eal")
export default class EalController {
  @operation({
    summary: "Get Eal",
  })
  @get()
  static getEal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eal",
  })
  @post("{id}")
  static createEal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
