import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqn")
export default class HqnController {
  @operation({
    summary: "Get Hqn",
  })
  @get()
  static getHqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqn",
  })
  @post("{id}")
  static createHqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
