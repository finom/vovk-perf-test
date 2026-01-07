import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dys")
export default class DysController {
  @operation({
    summary: "Get Dys",
  })
  @get()
  static getDys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dys",
  })
  @post("{id}")
  static createDys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
