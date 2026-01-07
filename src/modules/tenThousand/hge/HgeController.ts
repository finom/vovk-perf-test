import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hge")
export default class HgeController {
  @operation({
    summary: "Get Hge",
  })
  @get()
  static getHge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hge",
  })
  @post("{id}")
  static createHge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
