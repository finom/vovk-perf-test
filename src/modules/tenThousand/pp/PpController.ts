import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pp")
export default class PpController {
  @operation({
    summary: "Get Pp",
  })
  @get()
  static getPp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pp",
  })
  @post("{id}")
  static createPp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
