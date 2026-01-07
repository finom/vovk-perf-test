import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfc")
export default class JfcController {
  @operation({
    summary: "Get Jfc",
  })
  @get()
  static getJfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfc",
  })
  @post("{id}")
  static createJfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
