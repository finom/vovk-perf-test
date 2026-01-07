import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyv")
export default class GyvController {
  @operation({
    summary: "Get Gyv",
  })
  @get()
  static getGyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyv",
  })
  @post("{id}")
  static createGyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
