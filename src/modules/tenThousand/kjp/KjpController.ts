import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjp")
export default class KjpController {
  @operation({
    summary: "Get Kjp",
  })
  @get()
  static getKjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjp",
  })
  @post("{id}")
  static createKjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
