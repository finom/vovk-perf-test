import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doy")
export default class DoyController {
  @operation({
    summary: "Get Doy",
  })
  @get()
  static getDoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doy",
  })
  @post("{id}")
  static createDoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
