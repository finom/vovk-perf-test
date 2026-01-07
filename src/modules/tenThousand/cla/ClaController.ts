import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cla")
export default class ClaController {
  @operation({
    summary: "Get Cla",
  })
  @get()
  static getCla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cla",
  })
  @post("{id}")
  static createCla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
