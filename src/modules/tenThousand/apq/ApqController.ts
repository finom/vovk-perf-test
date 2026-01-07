import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apq")
export default class ApqController {
  @operation({
    summary: "Get Apq",
  })
  @get()
  static getApq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apq",
  })
  @post("{id}")
  static createApq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
