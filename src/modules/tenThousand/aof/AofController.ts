import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aof")
export default class AofController {
  @operation({
    summary: "Get Aof",
  })
  @get()
  static getAof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aof",
  })
  @post("{id}")
  static createAof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
