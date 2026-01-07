import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awo")
export default class AwoController {
  @operation({
    summary: "Get Awo",
  })
  @get()
  static getAwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awo",
  })
  @post("{id}")
  static createAwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
