import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddh")
export default class DdhController {
  @operation({
    summary: "Get Ddh",
  })
  @get()
  static getDdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddh",
  })
  @post("{id}")
  static createDdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
