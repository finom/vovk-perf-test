import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsb")
export default class DsbController {
  @operation({
    summary: "Get Dsb",
  })
  @get()
  static getDsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsb",
  })
  @post("{id}")
  static createDsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
