import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igh")
export default class IghController {
  @operation({
    summary: "Get Igh",
  })
  @get()
  static getIgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igh",
  })
  @post("{id}")
  static createIgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
