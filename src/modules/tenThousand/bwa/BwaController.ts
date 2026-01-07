import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwa")
export default class BwaController {
  @operation({
    summary: "Get Bwa",
  })
  @get()
  static getBwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwa",
  })
  @post("{id}")
  static createBwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
