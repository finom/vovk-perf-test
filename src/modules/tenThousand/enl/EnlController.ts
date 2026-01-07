import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enl")
export default class EnlController {
  @operation({
    summary: "Get Enl",
  })
  @get()
  static getEnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enl",
  })
  @post("{id}")
  static createEnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
