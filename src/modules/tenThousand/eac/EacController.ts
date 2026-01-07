import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eac")
export default class EacController {
  @operation({
    summary: "Get Eac",
  })
  @get()
  static getEac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eac",
  })
  @post("{id}")
  static createEac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
