import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbw")
export default class HbwController {
  @operation({
    summary: "Get Hbw",
  })
  @get()
  static getHbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbw",
  })
  @post("{id}")
  static createHbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
