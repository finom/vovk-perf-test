import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efr")
export default class EfrController {
  @operation({
    summary: "Get Efr",
  })
  @get()
  static getEfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efr",
  })
  @post("{id}")
  static createEfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
