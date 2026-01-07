import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enu")
export default class EnuController {
  @operation({
    summary: "Get Enu",
  })
  @get()
  static getEnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enu",
  })
  @post("{id}")
  static createEnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
