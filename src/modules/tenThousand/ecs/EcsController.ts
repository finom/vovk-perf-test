import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecs")
export default class EcsController {
  @operation({
    summary: "Get Ecs",
  })
  @get()
  static getEcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecs",
  })
  @post("{id}")
  static createEcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
