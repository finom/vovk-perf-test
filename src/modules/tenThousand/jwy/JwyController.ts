import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwy")
export default class JwyController {
  @operation({
    summary: "Get Jwy",
  })
  @get()
  static getJwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwy",
  })
  @post("{id}")
  static createJwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
