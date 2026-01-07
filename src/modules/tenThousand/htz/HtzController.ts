import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htz")
export default class HtzController {
  @operation({
    summary: "Get Htz",
  })
  @get()
  static getHtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htz",
  })
  @post("{id}")
  static createHtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
