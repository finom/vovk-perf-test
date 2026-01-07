import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huh")
export default class HuhController {
  @operation({
    summary: "Get Huh",
  })
  @get()
  static getHuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huh",
  })
  @post("{id}")
  static createHuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
