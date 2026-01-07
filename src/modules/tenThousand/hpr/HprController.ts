import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpr")
export default class HprController {
  @operation({
    summary: "Get Hpr",
  })
  @get()
  static getHpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpr",
  })
  @post("{id}")
  static createHpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
