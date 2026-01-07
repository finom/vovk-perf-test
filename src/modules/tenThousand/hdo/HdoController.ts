import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdo")
export default class HdoController {
  @operation({
    summary: "Get Hdo",
  })
  @get()
  static getHdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdo",
  })
  @post("{id}")
  static createHdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
