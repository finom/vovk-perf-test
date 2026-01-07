import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byq")
export default class ByqController {
  @operation({
    summary: "Get Byq",
  })
  @get()
  static getByq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byq",
  })
  @post("{id}")
  static createByq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
