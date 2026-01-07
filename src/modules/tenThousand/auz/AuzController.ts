import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auz")
export default class AuzController {
  @operation({
    summary: "Get Auz",
  })
  @get()
  static getAuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auz",
  })
  @post("{id}")
  static createAuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
