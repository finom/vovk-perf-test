import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccw")
export default class CcwController {
  @operation({
    summary: "Get Ccw",
  })
  @get()
  static getCcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccw",
  })
  @post("{id}")
  static createCcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
