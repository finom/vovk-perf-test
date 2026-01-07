import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfh")
export default class HfhController {
  @operation({
    summary: "Get Hfh",
  })
  @get()
  static getHfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfh",
  })
  @post("{id}")
  static createHfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
