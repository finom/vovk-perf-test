import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzt")
export default class DztController {
  @operation({
    summary: "Get Dzt",
  })
  @get()
  static getDzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzt",
  })
  @post("{id}")
  static createDzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
