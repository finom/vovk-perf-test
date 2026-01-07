import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuz")
export default class CuzController {
  @operation({
    summary: "Get Cuz",
  })
  @get()
  static getCuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuz",
  })
  @post("{id}")
  static createCuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
