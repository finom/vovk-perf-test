import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgk")
export default class KgkController {
  @operation({
    summary: "Get Kgk",
  })
  @get()
  static getKgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgk",
  })
  @post("{id}")
  static createKgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
