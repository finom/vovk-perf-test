import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqd")
export default class AqdController {
  @operation({
    summary: "Get Aqd",
  })
  @get()
  static getAqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqd",
  })
  @post("{id}")
  static createAqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
