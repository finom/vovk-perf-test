import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hi")
export default class HiController {
  @operation({
    summary: "Get Hi",
  })
  @get()
  static getHi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hi",
  })
  @post("{id}")
  static createHi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
