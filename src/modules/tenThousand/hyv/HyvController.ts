import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyv")
export default class HyvController {
  @operation({
    summary: "Get Hyv",
  })
  @get()
  static getHyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyv",
  })
  @post("{id}")
  static createHyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
