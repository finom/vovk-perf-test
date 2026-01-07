import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhl")
export default class BhlController {
  @operation({
    summary: "Get Bhl",
  })
  @get()
  static getBhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhl",
  })
  @post("{id}")
  static createBhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
