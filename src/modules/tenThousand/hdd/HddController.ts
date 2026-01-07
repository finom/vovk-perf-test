import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdd")
export default class HddController {
  @operation({
    summary: "Get Hdd",
  })
  @get()
  static getHdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdd",
  })
  @post("{id}")
  static createHdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
