import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eno")
export default class EnoController {
  @operation({
    summary: "Get Eno",
  })
  @get()
  static getEno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eno",
  })
  @post("{id}")
  static createEno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
