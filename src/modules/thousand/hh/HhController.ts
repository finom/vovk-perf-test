import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hh")
export default class HhController {
  @operation({
    summary: "Get Hh",
  })
  @get()
  static getHh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hh",
  })
  @post("{id}")
  static createHh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
