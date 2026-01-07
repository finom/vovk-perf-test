import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyt")
export default class FytController {
  @operation({
    summary: "Get Fyt",
  })
  @get()
  static getFyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyt",
  })
  @post("{id}")
  static createFyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
