import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huz")
export default class HuzController {
  @operation({
    summary: "Get Huz",
  })
  @get()
  static getHuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huz",
  })
  @post("{id}")
  static createHuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
