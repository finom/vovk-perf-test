import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joy")
export default class JoyController {
  @operation({
    summary: "Get Joy",
  })
  @get()
  static getJoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joy",
  })
  @post("{id}")
  static createJoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
