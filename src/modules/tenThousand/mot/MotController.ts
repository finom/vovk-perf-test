import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mot")
export default class MotController {
  @operation({
    summary: "Get Mot",
  })
  @get()
  static getMot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mot",
  })
  @post("{id}")
  static createMot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
