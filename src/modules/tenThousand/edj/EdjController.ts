import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edj")
export default class EdjController {
  @operation({
    summary: "Get Edj",
  })
  @get()
  static getEdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edj",
  })
  @post("{id}")
  static createEdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
