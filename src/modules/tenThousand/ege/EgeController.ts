import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ege")
export default class EgeController {
  @operation({
    summary: "Get Ege",
  })
  @get()
  static getEge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ege",
  })
  @post("{id}")
  static createEge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
