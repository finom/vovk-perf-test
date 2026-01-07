import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avf")
export default class AvfController {
  @operation({
    summary: "Get Avf",
  })
  @get()
  static getAvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avf",
  })
  @post("{id}")
  static createAvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
