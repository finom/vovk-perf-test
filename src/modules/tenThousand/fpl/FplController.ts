import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpl")
export default class FplController {
  @operation({
    summary: "Get Fpl",
  })
  @get()
  static getFpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpl",
  })
  @post("{id}")
  static createFpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
