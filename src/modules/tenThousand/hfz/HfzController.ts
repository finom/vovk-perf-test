import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfz")
export default class HfzController {
  @operation({
    summary: "Get Hfz",
  })
  @get()
  static getHfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfz",
  })
  @post("{id}")
  static createHfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
