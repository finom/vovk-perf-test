import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jum")
export default class JumController {
  @operation({
    summary: "Get Jum",
  })
  @get()
  static getJum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jum",
  })
  @post("{id}")
  static createJum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
