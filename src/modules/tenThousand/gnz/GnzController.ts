import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnz")
export default class GnzController {
  @operation({
    summary: "Get Gnz",
  })
  @get()
  static getGnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnz",
  })
  @post("{id}")
  static createGnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
