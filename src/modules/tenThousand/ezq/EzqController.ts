import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezq")
export default class EzqController {
  @operation({
    summary: "Get Ezq",
  })
  @get()
  static getEzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezq",
  })
  @post("{id}")
  static createEzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
