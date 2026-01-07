import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aov")
export default class AovController {
  @operation({
    summary: "Get Aov",
  })
  @get()
  static getAov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aov",
  })
  @post("{id}")
  static createAov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
