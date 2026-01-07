import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltj")
export default class LtjController {
  @operation({
    summary: "Get Ltj",
  })
  @get()
  static getLtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltj",
  })
  @post("{id}")
  static createLtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
