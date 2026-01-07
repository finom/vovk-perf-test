import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kit")
export default class KitController {
  @operation({
    summary: "Get Kit",
  })
  @get()
  static getKit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kit",
  })
  @post("{id}")
  static createKit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
