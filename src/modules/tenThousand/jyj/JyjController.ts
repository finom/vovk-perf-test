import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyj")
export default class JyjController {
  @operation({
    summary: "Get Jyj",
  })
  @get()
  static getJyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyj",
  })
  @post("{id}")
  static createJyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
