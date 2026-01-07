import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dev")
export default class DevController {
  @operation({
    summary: "Get Dev",
  })
  @get()
  static getDev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dev",
  })
  @post("{id}")
  static createDev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
