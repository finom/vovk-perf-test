import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eol")
export default class EolController {
  @operation({
    summary: "Get Eol",
  })
  @get()
  static getEol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eol",
  })
  @post("{id}")
  static createEol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
