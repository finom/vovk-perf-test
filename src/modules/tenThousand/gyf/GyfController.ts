import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyf")
export default class GyfController {
  @operation({
    summary: "Get Gyf",
  })
  @get()
  static getGyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyf",
  })
  @post("{id}")
  static createGyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
