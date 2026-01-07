import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqu")
export default class HquController {
  @operation({
    summary: "Get Hqu",
  })
  @get()
  static getHqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqu",
  })
  @post("{id}")
  static createHqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
