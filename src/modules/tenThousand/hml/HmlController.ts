import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hml")
export default class HmlController {
  @operation({
    summary: "Get Hml",
  })
  @get()
  static getHml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hml",
  })
  @post("{id}")
  static createHml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
