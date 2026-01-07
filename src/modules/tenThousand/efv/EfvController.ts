import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efv")
export default class EfvController {
  @operation({
    summary: "Get Efv",
  })
  @get()
  static getEfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efv",
  })
  @post("{id}")
  static createEfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
