import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bee")
export default class BeeController {
  @operation({
    summary: "Get Bee",
  })
  @get()
  static getBee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bee",
  })
  @post("{id}")
  static createBee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
