import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jay")
export default class JayController {
  @operation({
    summary: "Get Jay",
  })
  @get()
  static getJay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jay",
  })
  @post("{id}")
  static createJay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
