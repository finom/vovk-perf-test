import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrl")
export default class LrlController {
  @operation({
    summary: "Get Lrl",
  })
  @get()
  static getLrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrl",
  })
  @post("{id}")
  static createLrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
