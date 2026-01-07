import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buz")
export default class BuzController {
  @operation({
    summary: "Get Buz",
  })
  @get()
  static getBuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buz",
  })
  @post("{id}")
  static createBuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
