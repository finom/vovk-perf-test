import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kby")
export default class KbyController {
  @operation({
    summary: "Get Kby",
  })
  @get()
  static getKby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kby",
  })
  @post("{id}")
  static createKby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
