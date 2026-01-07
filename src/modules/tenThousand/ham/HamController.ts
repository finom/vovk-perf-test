import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ham")
export default class HamController {
  @operation({
    summary: "Get Ham",
  })
  @get()
  static getHam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ham",
  })
  @post("{id}")
  static createHam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
