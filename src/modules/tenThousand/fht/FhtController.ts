import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fht")
export default class FhtController {
  @operation({
    summary: "Get Fht",
  })
  @get()
  static getFht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fht",
  })
  @post("{id}")
  static createFht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
