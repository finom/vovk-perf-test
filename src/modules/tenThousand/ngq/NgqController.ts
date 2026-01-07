import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngq")
export default class NgqController {
  @operation({
    summary: "Get Ngq",
  })
  @get()
  static getNgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngq",
  })
  @post("{id}")
  static createNgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
