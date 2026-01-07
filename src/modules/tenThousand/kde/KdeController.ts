import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kde")
export default class KdeController {
  @operation({
    summary: "Get Kde",
  })
  @get()
  static getKde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kde",
  })
  @post("{id}")
  static createKde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
