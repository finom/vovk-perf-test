import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hob")
export default class HobController {
  @operation({
    summary: "Get Hob",
  })
  @get()
  static getHob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hob",
  })
  @post("{id}")
  static createHob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
