import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adt")
export default class AdtController {
  @operation({
    summary: "Get Adt",
  })
  @get()
  static getAdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adt",
  })
  @post("{id}")
  static createAdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
