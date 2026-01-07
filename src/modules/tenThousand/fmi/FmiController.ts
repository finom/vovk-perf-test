import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmi")
export default class FmiController {
  @operation({
    summary: "Get Fmi",
  })
  @get()
  static getFmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmi",
  })
  @post("{id}")
  static createFmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
