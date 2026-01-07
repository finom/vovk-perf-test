import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fou")
export default class FouController {
  @operation({
    summary: "Get Fou",
  })
  @get()
  static getFou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fou",
  })
  @post("{id}")
  static createFou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
