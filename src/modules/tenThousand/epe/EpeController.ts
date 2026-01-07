import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epe")
export default class EpeController {
  @operation({
    summary: "Get Epe",
  })
  @get()
  static getEpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epe",
  })
  @post("{id}")
  static createEpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
