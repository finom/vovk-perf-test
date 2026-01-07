import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eep")
export default class EepController {
  @operation({
    summary: "Get Eep",
  })
  @get()
  static getEep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eep",
  })
  @post("{id}")
  static createEep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
