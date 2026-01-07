import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhd")
export default class JhdController {
  @operation({
    summary: "Get Jhd",
  })
  @get()
  static getJhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhd",
  })
  @post("{id}")
  static createJhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
