import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pj")
export default class PjController {
  @operation({
    summary: "Get Pj",
  })
  @get()
  static getPj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pj",
  })
  @post("{id}")
  static createPj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
