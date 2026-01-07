import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyp")
export default class FypController {
  @operation({
    summary: "Get Fyp",
  })
  @get()
  static getFyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyp",
  })
  @post("{id}")
  static createFyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
