import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezi")
export default class EziController {
  @operation({
    summary: "Get Ezi",
  })
  @get()
  static getEzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezi",
  })
  @post("{id}")
  static createEzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
