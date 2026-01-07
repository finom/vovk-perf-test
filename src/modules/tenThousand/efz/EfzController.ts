import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efz")
export default class EfzController {
  @operation({
    summary: "Get Efz",
  })
  @get()
  static getEfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efz",
  })
  @post("{id}")
  static createEfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
