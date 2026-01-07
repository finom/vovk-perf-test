import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hne")
export default class HneController {
  @operation({
    summary: "Get Hne",
  })
  @get()
  static getHne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hne",
  })
  @post("{id}")
  static createHne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
