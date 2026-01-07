import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eit")
export default class EitController {
  @operation({
    summary: "Get Eit",
  })
  @get()
  static getEit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eit",
  })
  @post("{id}")
  static createEit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
