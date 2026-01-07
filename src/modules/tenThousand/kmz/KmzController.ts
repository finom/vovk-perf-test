import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmz")
export default class KmzController {
  @operation({
    summary: "Get Kmz",
  })
  @get()
  static getKmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmz",
  })
  @post("{id}")
  static createKmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
