import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvy")
export default class JvyController {
  @operation({
    summary: "Get Jvy",
  })
  @get()
  static getJvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvy",
  })
  @post("{id}")
  static createJvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
