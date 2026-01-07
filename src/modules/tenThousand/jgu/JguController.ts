import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgu")
export default class JguController {
  @operation({
    summary: "Get Jgu",
  })
  @get()
  static getJgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgu",
  })
  @post("{id}")
  static createJgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
