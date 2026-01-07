import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idh")
export default class IdhController {
  @operation({
    summary: "Get Idh",
  })
  @get()
  static getIdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idh",
  })
  @post("{id}")
  static createIdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
