import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgj")
export default class CgjController {
  @operation({
    summary: "Get Cgj",
  })
  @get()
  static getCgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgj",
  })
  @post("{id}")
  static createCgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
