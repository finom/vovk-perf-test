import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahk")
export default class AhkController {
  @operation({
    summary: "Get Ahk",
  })
  @get()
  static getAhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahk",
  })
  @post("{id}")
  static createAhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
