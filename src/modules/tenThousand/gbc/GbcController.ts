import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbc")
export default class GbcController {
  @operation({
    summary: "Get Gbc",
  })
  @get()
  static getGbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbc",
  })
  @post("{id}")
  static createGbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
