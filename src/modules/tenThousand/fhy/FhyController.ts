import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhy")
export default class FhyController {
  @operation({
    summary: "Get Fhy",
  })
  @get()
  static getFhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhy",
  })
  @post("{id}")
  static createFhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
