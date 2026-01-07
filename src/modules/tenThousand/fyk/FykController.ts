import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyk")
export default class FykController {
  @operation({
    summary: "Get Fyk",
  })
  @get()
  static getFyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyk",
  })
  @post("{id}")
  static createFyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
