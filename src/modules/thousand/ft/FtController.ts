import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ft")
export default class FtController {
  @operation({
    summary: "Get Ft",
  })
  @get()
  static getFt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ft",
  })
  @post("{id}")
  static createFt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
