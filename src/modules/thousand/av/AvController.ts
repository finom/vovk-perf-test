import { procedure, prefix, get, post, operation } from "vovk";

@prefix("av")
export default class AvController {
  @operation({
    summary: "Get Av",
  })
  @get()
  static getAv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Av",
  })
  @post("{id}")
  static createAv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
