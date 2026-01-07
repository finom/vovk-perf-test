import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elu")
export default class EluController {
  @operation({
    summary: "Get Elu",
  })
  @get()
  static getElu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elu",
  })
  @post("{id}")
  static createElu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
