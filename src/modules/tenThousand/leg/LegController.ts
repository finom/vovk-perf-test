import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leg")
export default class LegController {
  @operation({
    summary: "Get Leg",
  })
  @get()
  static getLeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leg",
  })
  @post("{id}")
  static createLeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
