import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fit")
export default class FitController {
  @operation({
    summary: "Get Fit",
  })
  @get()
  static getFit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fit",
  })
  @post("{id}")
  static createFit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
