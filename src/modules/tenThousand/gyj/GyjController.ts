import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyj")
export default class GyjController {
  @operation({
    summary: "Get Gyj",
  })
  @get()
  static getGyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyj",
  })
  @post("{id}")
  static createGyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
