import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghf")
export default class GhfController {
  @operation({
    summary: "Get Ghf",
  })
  @get()
  static getGhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghf",
  })
  @post("{id}")
  static createGhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
