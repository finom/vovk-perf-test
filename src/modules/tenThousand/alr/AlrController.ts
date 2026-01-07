import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alr")
export default class AlrController {
  @operation({
    summary: "Get Alr",
  })
  @get()
  static getAlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alr",
  })
  @post("{id}")
  static createAlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
