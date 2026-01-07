import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kot")
export default class KotController {
  @operation({
    summary: "Get Kot",
  })
  @get()
  static getKot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kot",
  })
  @post("{id}")
  static createKot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
