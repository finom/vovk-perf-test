import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krk")
export default class KrkController {
  @operation({
    summary: "Get Krk",
  })
  @get()
  static getKrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krk",
  })
  @post("{id}")
  static createKrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
