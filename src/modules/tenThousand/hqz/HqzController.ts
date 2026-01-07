import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqz")
export default class HqzController {
  @operation({
    summary: "Get Hqz",
  })
  @get()
  static getHqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqz",
  })
  @post("{id}")
  static createHqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
