import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyy")
export default class FyyController {
  @operation({
    summary: "Get Fyy",
  })
  @get()
  static getFyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyy",
  })
  @post("{id}")
  static createFyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
