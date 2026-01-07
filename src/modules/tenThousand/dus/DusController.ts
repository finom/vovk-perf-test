import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dus")
export default class DusController {
  @operation({
    summary: "Get Dus",
  })
  @get()
  static getDus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dus",
  })
  @post("{id}")
  static createDus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
