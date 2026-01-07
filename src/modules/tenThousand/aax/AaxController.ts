import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aax")
export default class AaxController {
  @operation({
    summary: "Get Aax",
  })
  @get()
  static getAax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aax",
  })
  @post("{id}")
  static createAax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
