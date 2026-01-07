import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eou")
export default class EouController {
  @operation({
    summary: "Get Eou",
  })
  @get()
  static getEou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eou",
  })
  @post("{id}")
  static createEou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
