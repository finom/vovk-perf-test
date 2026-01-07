import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mal")
export default class MalController {
  @operation({
    summary: "Get Mal",
  })
  @get()
  static getMal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mal",
  })
  @post("{id}")
  static createMal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
