import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jo")
export default class JoController {
  @operation({
    summary: "Get Jo",
  })
  @get()
  static getJo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jo",
  })
  @post("{id}")
  static createJo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
