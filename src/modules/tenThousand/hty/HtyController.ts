import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hty")
export default class HtyController {
  @operation({
    summary: "Get Hty",
  })
  @get()
  static getHty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hty",
  })
  @post("{id}")
  static createHty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
