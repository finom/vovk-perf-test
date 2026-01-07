import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnh")
export default class HnhController {
  @operation({
    summary: "Get Hnh",
  })
  @get()
  static getHnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnh",
  })
  @post("{id}")
  static createHnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
