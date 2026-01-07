import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bct")
export default class BctController {
  @operation({
    summary: "Get Bct",
  })
  @get()
  static getBct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bct",
  })
  @post("{id}")
  static createBct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
