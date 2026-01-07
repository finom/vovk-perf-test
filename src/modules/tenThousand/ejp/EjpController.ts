import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejp")
export default class EjpController {
  @operation({
    summary: "Get Ejp",
  })
  @get()
  static getEjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejp",
  })
  @post("{id}")
  static createEjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
