import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avv")
export default class AvvController {
  @operation({
    summary: "Get Avv",
  })
  @get()
  static getAvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avv",
  })
  @post("{id}")
  static createAvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
