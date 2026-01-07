import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grg")
export default class GrgController {
  @operation({
    summary: "Get Grg",
  })
  @get()
  static getGrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grg",
  })
  @post("{id}")
  static createGrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
