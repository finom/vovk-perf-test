import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyy")
export default class JyyController {
  @operation({
    summary: "Get Jyy",
  })
  @get()
  static getJyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyy",
  })
  @post("{id}")
  static createJyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
