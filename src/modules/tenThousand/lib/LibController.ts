import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lib")
export default class LibController {
  @operation({
    summary: "Get Lib",
  })
  @get()
  static getLib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lib",
  })
  @post("{id}")
  static createLib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
