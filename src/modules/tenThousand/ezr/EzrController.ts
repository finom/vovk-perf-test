import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezr")
export default class EzrController {
  @operation({
    summary: "Get Ezr",
  })
  @get()
  static getEzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezr",
  })
  @post("{id}")
  static createEzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
