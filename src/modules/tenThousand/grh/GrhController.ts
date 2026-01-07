import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grh")
export default class GrhController {
  @operation({
    summary: "Get Grh",
  })
  @get()
  static getGrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grh",
  })
  @post("{id}")
  static createGrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
