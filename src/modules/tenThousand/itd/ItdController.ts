import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itd")
export default class ItdController {
  @operation({
    summary: "Get Itd",
  })
  @get()
  static getItd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itd",
  })
  @post("{id}")
  static createItd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
