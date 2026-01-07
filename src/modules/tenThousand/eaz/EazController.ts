import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaz")
export default class EazController {
  @operation({
    summary: "Get Eaz",
  })
  @get()
  static getEaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eaz",
  })
  @post("{id}")
  static createEaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
