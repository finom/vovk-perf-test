import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ego")
export default class EgoController {
  @operation({
    summary: "Get Ego",
  })
  @get()
  static getEgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ego",
  })
  @post("{id}")
  static createEgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
