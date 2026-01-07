import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddq")
export default class DdqController {
  @operation({
    summary: "Get Ddq",
  })
  @get()
  static getDdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddq",
  })
  @post("{id}")
  static createDdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
