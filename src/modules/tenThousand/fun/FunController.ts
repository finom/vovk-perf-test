import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fun")
export default class FunController {
  @operation({
    summary: "Get Fun",
  })
  @get()
  static getFun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fun",
  })
  @post("{id}")
  static createFun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
