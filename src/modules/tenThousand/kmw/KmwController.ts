import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmw")
export default class KmwController {
  @operation({
    summary: "Get Kmw",
  })
  @get()
  static getKmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmw",
  })
  @post("{id}")
  static createKmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
