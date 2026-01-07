import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkp")
export default class FkpController {
  @operation({
    summary: "Get Fkp",
  })
  @get()
  static getFkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkp",
  })
  @post("{id}")
  static createFkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
