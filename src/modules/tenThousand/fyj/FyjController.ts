import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyj")
export default class FyjController {
  @operation({
    summary: "Get Fyj",
  })
  @get()
  static getFyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyj",
  })
  @post("{id}")
  static createFyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
