import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdb")
export default class BdbController {
  @operation({
    summary: "Get Bdb",
  })
  @get()
  static getBdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdb",
  })
  @post("{id}")
  static createBdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
