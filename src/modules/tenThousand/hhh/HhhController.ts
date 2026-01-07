import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhh")
export default class HhhController {
  @operation({
    summary: "Get Hhh",
  })
  @get()
  static getHhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhh",
  })
  @post("{id}")
  static createHhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
