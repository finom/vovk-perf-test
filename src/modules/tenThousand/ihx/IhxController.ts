import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihx")
export default class IhxController {
  @operation({
    summary: "Get Ihx",
  })
  @get()
  static getIhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihx",
  })
  @post("{id}")
  static createIhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
