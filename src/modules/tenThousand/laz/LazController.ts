import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laz")
export default class LazController {
  @operation({
    summary: "Get Laz",
  })
  @get()
  static getLaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Laz",
  })
  @post("{id}")
  static createLaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
