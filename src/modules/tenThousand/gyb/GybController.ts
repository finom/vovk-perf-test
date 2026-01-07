import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyb")
export default class GybController {
  @operation({
    summary: "Get Gyb",
  })
  @get()
  static getGyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyb",
  })
  @post("{id}")
  static createGyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
