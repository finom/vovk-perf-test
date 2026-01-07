import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gor")
export default class GorController {
  @operation({
    summary: "Get Gor",
  })
  @get()
  static getGor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gor",
  })
  @post("{id}")
  static createGor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
