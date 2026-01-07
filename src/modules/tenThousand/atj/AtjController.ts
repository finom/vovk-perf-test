import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atj")
export default class AtjController {
  @operation({
    summary: "Get Atj",
  })
  @get()
  static getAtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atj",
  })
  @post("{id}")
  static createAtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
