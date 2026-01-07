import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngc")
export default class NgcController {
  @operation({
    summary: "Get Ngc",
  })
  @get()
  static getNgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngc",
  })
  @post("{id}")
  static createNgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
