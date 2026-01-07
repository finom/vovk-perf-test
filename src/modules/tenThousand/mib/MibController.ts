import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mib")
export default class MibController {
  @operation({
    summary: "Get Mib",
  })
  @get()
  static getMib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mib",
  })
  @post("{id}")
  static createMib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
