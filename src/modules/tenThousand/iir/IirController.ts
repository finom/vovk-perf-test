import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iir")
export default class IirController {
  @operation({
    summary: "Get Iir",
  })
  @get()
  static getIir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iir",
  })
  @post("{id}")
  static createIir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
