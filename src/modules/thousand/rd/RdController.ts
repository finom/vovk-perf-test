import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rd")
export default class RdController {
  @operation({
    summary: "Get Rd",
  })
  @get()
  static getRd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rd",
  })
  @post("{id}")
  static createRd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
