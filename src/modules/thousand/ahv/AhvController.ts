import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahv")
export default class AhvController {
  @operation({
    summary: "Get Ahv",
  })
  @get()
  static getAhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahv",
  })
  @post("{id}")
  static createAhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
