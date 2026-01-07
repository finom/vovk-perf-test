import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwk")
export default class KwkController {
  @operation({
    summary: "Get Kwk",
  })
  @get()
  static getKwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwk",
  })
  @post("{id}")
  static createKwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
