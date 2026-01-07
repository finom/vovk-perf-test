import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rc")
export default class RcController {
  @operation({
    summary: "Get Rc",
  })
  @get()
  static getRc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rc",
  })
  @post("{id}")
  static createRc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
