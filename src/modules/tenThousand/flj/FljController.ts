import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flj")
export default class FljController {
  @operation({
    summary: "Get Flj",
  })
  @get()
  static getFlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flj",
  })
  @post("{id}")
  static createFlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
