import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngx")
export default class NgxController {
  @operation({
    summary: "Get Ngx",
  })
  @get()
  static getNgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngx",
  })
  @post("{id}")
  static createNgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
