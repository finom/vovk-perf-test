import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebn")
export default class EbnController {
  @operation({
    summary: "Get Ebn",
  })
  @get()
  static getEbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebn",
  })
  @post("{id}")
  static createEbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
