import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jts")
export default class JtsController {
  @operation({
    summary: "Get Jts",
  })
  @get()
  static getJts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jts",
  })
  @post("{id}")
  static createJts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
