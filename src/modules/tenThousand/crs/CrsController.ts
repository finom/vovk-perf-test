import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crs")
export default class CrsController {
  @operation({
    summary: "Get Crs",
  })
  @get()
  static getCrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crs",
  })
  @post("{id}")
  static createCrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
