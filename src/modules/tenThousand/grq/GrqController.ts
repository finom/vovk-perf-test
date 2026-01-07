import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grq")
export default class GrqController {
  @operation({
    summary: "Get Grq",
  })
  @get()
  static getGrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grq",
  })
  @post("{id}")
  static createGrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
