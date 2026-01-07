import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbz")
export default class HbzController {
  @operation({
    summary: "Get Hbz",
  })
  @get()
  static getHbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbz",
  })
  @post("{id}")
  static createHbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
