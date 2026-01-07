import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flr")
export default class FlrController {
  @operation({
    summary: "Get Flr",
  })
  @get()
  static getFlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flr",
  })
  @post("{id}")
  static createFlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
