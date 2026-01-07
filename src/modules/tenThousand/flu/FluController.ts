import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flu")
export default class FluController {
  @operation({
    summary: "Get Flu",
  })
  @get()
  static getFlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flu",
  })
  @post("{id}")
  static createFlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
