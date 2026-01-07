import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fev")
export default class FevController {
  @operation({
    summary: "Get Fev",
  })
  @get()
  static getFev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fev",
  })
  @post("{id}")
  static createFev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
