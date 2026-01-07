import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heg")
export default class HegController {
  @operation({
    summary: "Get Heg",
  })
  @get()
  static getHeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heg",
  })
  @post("{id}")
  static createHeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
