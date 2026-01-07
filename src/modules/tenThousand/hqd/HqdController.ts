import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqd")
export default class HqdController {
  @operation({
    summary: "Get Hqd",
  })
  @get()
  static getHqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqd",
  })
  @post("{id}")
  static createHqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
