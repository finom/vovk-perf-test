import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gok")
export default class GokController {
  @operation({
    summary: "Get Gok",
  })
  @get()
  static getGok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gok",
  })
  @post("{id}")
  static createGok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
