import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frs")
export default class FrsController {
  @operation({
    summary: "Get Frs",
  })
  @get()
  static getFrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frs",
  })
  @post("{id}")
  static createFrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
