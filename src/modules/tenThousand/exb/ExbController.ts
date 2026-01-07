import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exb")
export default class ExbController {
  @operation({
    summary: "Get Exb",
  })
  @get()
  static getExb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exb",
  })
  @post("{id}")
  static createExb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
