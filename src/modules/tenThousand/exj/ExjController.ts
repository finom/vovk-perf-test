import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exj")
export default class ExjController {
  @operation({
    summary: "Get Exj",
  })
  @get()
  static getExj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exj",
  })
  @post("{id}")
  static createExj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
