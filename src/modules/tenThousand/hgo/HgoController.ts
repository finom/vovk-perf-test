import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgo")
export default class HgoController {
  @operation({
    summary: "Get Hgo",
  })
  @get()
  static getHgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgo",
  })
  @post("{id}")
  static createHgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
