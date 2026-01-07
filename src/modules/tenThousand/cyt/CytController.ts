import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyt")
export default class CytController {
  @operation({
    summary: "Get Cyt",
  })
  @get()
  static getCyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyt",
  })
  @post("{id}")
  static createCyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
