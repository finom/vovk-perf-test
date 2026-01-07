import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jez")
export default class JezController {
  @operation({
    summary: "Get Jez",
  })
  @get()
  static getJez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jez",
  })
  @post("{id}")
  static createJez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
