import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eer")
export default class EerController {
  @operation({
    summary: "Get Eer",
  })
  @get()
  static getEer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eer",
  })
  @post("{id}")
  static createEer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
