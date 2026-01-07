import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eam")
export default class EamController {
  @operation({
    summary: "Get Eam",
  })
  @get()
  static getEam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eam",
  })
  @post("{id}")
  static createEam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
