import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eec")
export default class EecController {
  @operation({
    summary: "Get Eec",
  })
  @get()
  static getEec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eec",
  })
  @post("{id}")
  static createEec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
