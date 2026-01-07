import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gee")
export default class GeeController {
  @operation({
    summary: "Get Gee",
  })
  @get()
  static getGee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gee",
  })
  @post("{id}")
  static createGee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
