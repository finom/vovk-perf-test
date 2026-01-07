import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmy")
export default class DmyController {
  @operation({
    summary: "Get Dmy",
  })
  @get()
  static getDmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmy",
  })
  @post("{id}")
  static createDmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
