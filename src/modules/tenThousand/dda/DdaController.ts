import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dda")
export default class DdaController {
  @operation({
    summary: "Get Dda",
  })
  @get()
  static getDda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dda",
  })
  @post("{id}")
  static createDda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
