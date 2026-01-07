import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vh")
export default class VhController {
  @operation({
    summary: "Get Vh",
  })
  @get()
  static getVh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vh",
  })
  @post("{id}")
  static createVh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
