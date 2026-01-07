import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqk")
export default class KqkController {
  @operation({
    summary: "Get Kqk",
  })
  @get()
  static getKqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqk",
  })
  @post("{id}")
  static createKqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
