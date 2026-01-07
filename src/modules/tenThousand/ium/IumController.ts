import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ium")
export default class IumController {
  @operation({
    summary: "Get Ium",
  })
  @get()
  static getIum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ium",
  })
  @post("{id}")
  static createIum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
