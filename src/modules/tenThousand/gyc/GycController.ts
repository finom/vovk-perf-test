import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyc")
export default class GycController {
  @operation({
    summary: "Get Gyc",
  })
  @get()
  static getGyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyc",
  })
  @post("{id}")
  static createGyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
