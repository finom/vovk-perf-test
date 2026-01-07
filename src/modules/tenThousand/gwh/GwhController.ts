import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwh")
export default class GwhController {
  @operation({
    summary: "Get Gwh",
  })
  @get()
  static getGwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwh",
  })
  @post("{id}")
  static createGwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
