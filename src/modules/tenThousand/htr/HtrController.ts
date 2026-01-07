import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htr")
export default class HtrController {
  @operation({
    summary: "Get Htr",
  })
  @get()
  static getHtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htr",
  })
  @post("{id}")
  static createHtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
