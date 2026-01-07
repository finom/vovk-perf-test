import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faf")
export default class FafController {
  @operation({
    summary: "Get Faf",
  })
  @get()
  static getFaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Faf",
  })
  @post("{id}")
  static createFaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
