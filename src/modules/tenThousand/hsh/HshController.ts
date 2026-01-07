import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsh")
export default class HshController {
  @operation({
    summary: "Get Hsh",
  })
  @get()
  static getHsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsh",
  })
  @post("{id}")
  static createHsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
