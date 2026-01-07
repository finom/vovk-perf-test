import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnh")
export default class GnhController {
  @operation({
    summary: "Get Gnh",
  })
  @get()
  static getGnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnh",
  })
  @post("{id}")
  static createGnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
