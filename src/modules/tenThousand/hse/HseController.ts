import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hse")
export default class HseController {
  @operation({
    summary: "Get Hse",
  })
  @get()
  static getHse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hse",
  })
  @post("{id}")
  static createHse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
