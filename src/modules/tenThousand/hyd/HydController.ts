import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyd")
export default class HydController {
  @operation({
    summary: "Get Hyd",
  })
  @get()
  static getHyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyd",
  })
  @post("{id}")
  static createHyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
