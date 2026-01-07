import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eld")
export default class EldController {
  @operation({
    summary: "Get Eld",
  })
  @get()
  static getEld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eld",
  })
  @post("{id}")
  static createEld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
