import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idj")
export default class IdjController {
  @operation({
    summary: "Get Idj",
  })
  @get()
  static getIdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idj",
  })
  @post("{id}")
  static createIdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
