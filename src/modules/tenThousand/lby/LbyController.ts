import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lby")
export default class LbyController {
  @operation({
    summary: "Get Lby",
  })
  @get()
  static getLby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lby",
  })
  @post("{id}")
  static createLby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
