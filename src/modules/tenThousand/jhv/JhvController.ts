import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhv")
export default class JhvController {
  @operation({
    summary: "Get Jhv",
  })
  @get()
  static getJhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhv",
  })
  @post("{id}")
  static createJhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
