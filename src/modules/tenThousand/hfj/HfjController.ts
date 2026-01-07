import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfj")
export default class HfjController {
  @operation({
    summary: "Get Hfj",
  })
  @get()
  static getHfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfj",
  })
  @post("{id}")
  static createHfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
