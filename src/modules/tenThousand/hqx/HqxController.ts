import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqx")
export default class HqxController {
  @operation({
    summary: "Get Hqx",
  })
  @get()
  static getHqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqx",
  })
  @post("{id}")
  static createHqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
