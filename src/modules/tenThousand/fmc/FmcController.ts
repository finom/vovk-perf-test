import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmc")
export default class FmcController {
  @operation({
    summary: "Get Fmc",
  })
  @get()
  static getFmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmc",
  })
  @post("{id}")
  static createFmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
