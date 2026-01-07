import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gng")
export default class GngController {
  @operation({
    summary: "Get Gng",
  })
  @get()
  static getGng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gng",
  })
  @post("{id}")
  static createGng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
