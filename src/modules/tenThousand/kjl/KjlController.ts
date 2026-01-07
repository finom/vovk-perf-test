import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjl")
export default class KjlController {
  @operation({
    summary: "Get Kjl",
  })
  @get()
  static getKjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjl",
  })
  @post("{id}")
  static createKjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
