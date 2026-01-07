import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpr")
export default class LprController {
  @operation({
    summary: "Get Lpr",
  })
  @get()
  static getLpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpr",
  })
  @post("{id}")
  static createLpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
