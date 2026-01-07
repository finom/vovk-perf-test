import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipo")
export default class IpoController {
  @operation({
    summary: "Get Ipo",
  })
  @get()
  static getIpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipo",
  })
  @post("{id}")
  static createIpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
