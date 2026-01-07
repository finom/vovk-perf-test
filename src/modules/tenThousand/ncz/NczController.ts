import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncz")
export default class NczController {
  @operation({
    summary: "Get Ncz",
  })
  @get()
  static getNcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncz",
  })
  @post("{id}")
  static createNcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
