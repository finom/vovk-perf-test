import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvc")
export default class HvcController {
  @operation({
    summary: "Get Hvc",
  })
  @get()
  static getHvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvc",
  })
  @post("{id}")
  static createHvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
