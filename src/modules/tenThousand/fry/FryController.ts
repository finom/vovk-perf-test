import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fry")
export default class FryController {
  @operation({
    summary: "Get Fry",
  })
  @get()
  static getFry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fry",
  })
  @post("{id}")
  static createFry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
