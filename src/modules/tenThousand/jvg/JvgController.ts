import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvg")
export default class JvgController {
  @operation({
    summary: "Get Jvg",
  })
  @get()
  static getJvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvg",
  })
  @post("{id}")
  static createJvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
