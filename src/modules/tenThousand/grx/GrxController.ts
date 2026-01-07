import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grx")
export default class GrxController {
  @operation({
    summary: "Get Grx",
  })
  @get()
  static getGrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grx",
  })
  @post("{id}")
  static createGrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
