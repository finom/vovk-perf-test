import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsy")
export default class BsyController {
  @operation({
    summary: "Get Bsy",
  })
  @get()
  static getBsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsy",
  })
  @post("{id}")
  static createBsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
