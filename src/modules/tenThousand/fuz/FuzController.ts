import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuz")
export default class FuzController {
  @operation({
    summary: "Get Fuz",
  })
  @get()
  static getFuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuz",
  })
  @post("{id}")
  static createFuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
