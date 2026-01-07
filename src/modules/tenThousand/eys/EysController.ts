import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eys")
export default class EysController {
  @operation({
    summary: "Get Eys",
  })
  @get()
  static getEys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eys",
  })
  @post("{id}")
  static createEys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
