import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eob")
export default class EobController {
  @operation({
    summary: "Get Eob",
  })
  @get()
  static getEob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eob",
  })
  @post("{id}")
  static createEob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
