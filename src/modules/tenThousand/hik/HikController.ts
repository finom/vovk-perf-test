import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hik")
export default class HikController {
  @operation({
    summary: "Get Hik",
  })
  @get()
  static getHik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hik",
  })
  @post("{id}")
  static createHik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
