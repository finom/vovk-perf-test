import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haq")
export default class HaqController {
  @operation({
    summary: "Get Haq",
  })
  @get()
  static getHaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haq",
  })
  @post("{id}")
  static createHaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
