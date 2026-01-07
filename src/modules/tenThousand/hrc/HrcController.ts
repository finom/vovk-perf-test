import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrc")
export default class HrcController {
  @operation({
    summary: "Get Hrc",
  })
  @get()
  static getHrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrc",
  })
  @post("{id}")
  static createHrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
