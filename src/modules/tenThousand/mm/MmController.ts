import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mm")
export default class MmController {
  @operation({
    summary: "Get Mm",
  })
  @get()
  static getMm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mm",
  })
  @post("{id}")
  static createMm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
