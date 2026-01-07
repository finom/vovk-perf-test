import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ked")
export default class KedController {
  @operation({
    summary: "Get Ked",
  })
  @get()
  static getKed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ked",
  })
  @post("{id}")
  static createKed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
