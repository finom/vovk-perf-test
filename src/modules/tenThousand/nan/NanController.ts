import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nan")
export default class NanController {
  @operation({
    summary: "Get Nan",
  })
  @get()
  static getNan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nan",
  })
  @post("{id}")
  static createNan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
