import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asc")
export default class AscController {
  @operation({
    summary: "Get Asc",
  })
  @get()
  static getAsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asc",
  })
  @post("{id}")
  static createAsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
