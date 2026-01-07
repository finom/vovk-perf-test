import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caz")
export default class CazController {
  @operation({
    summary: "Get Caz",
  })
  @get()
  static getCaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Caz",
  })
  @post("{id}")
  static createCaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
