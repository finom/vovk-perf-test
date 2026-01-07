import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abk")
export default class AbkController {
  @operation({
    summary: "Get Abk",
  })
  @get()
  static getAbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abk",
  })
  @post("{id}")
  static createAbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
