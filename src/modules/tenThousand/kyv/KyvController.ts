import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyv")
export default class KyvController {
  @operation({
    summary: "Get Kyv",
  })
  @get()
  static getKyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyv",
  })
  @post("{id}")
  static createKyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
