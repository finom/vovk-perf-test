import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clr")
export default class ClrController {
  @operation({
    summary: "Get Clr",
  })
  @get()
  static getClr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clr",
  })
  @post("{id}")
  static createClr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
