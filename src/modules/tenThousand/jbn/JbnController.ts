import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbn")
export default class JbnController {
  @operation({
    summary: "Get Jbn",
  })
  @get()
  static getJbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbn",
  })
  @post("{id}")
  static createJbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
