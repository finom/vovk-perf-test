import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rq")
export default class RqController {
  @operation({
    summary: "Get Rq",
  })
  @get()
  static getRq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rq",
  })
  @post("{id}")
  static createRq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
