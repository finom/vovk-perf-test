import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfe")
export default class GfeController {
  @operation({
    summary: "Get Gfe",
  })
  @get()
  static getGfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfe",
  })
  @post("{id}")
  static createGfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
