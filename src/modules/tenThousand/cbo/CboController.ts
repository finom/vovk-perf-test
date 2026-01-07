import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbo")
export default class CboController {
  @operation({
    summary: "Get Cbo",
  })
  @get()
  static getCbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbo",
  })
  @post("{id}")
  static createCbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
