import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rr")
export default class RrController {
  @operation({
    summary: "Get Rr",
  })
  @get()
  static getRr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rr",
  })
  @post("{id}")
  static createRr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
