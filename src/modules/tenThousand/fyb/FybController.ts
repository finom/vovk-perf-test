import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyb")
export default class FybController {
  @operation({
    summary: "Get Fyb",
  })
  @get()
  static getFyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyb",
  })
  @post("{id}")
  static createFyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
