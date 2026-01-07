import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebt")
export default class EbtController {
  @operation({
    summary: "Get Ebt",
  })
  @get()
  static getEbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebt",
  })
  @post("{id}")
  static createEbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
