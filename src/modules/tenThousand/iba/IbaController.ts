import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iba")
export default class IbaController {
  @operation({
    summary: "Get Iba",
  })
  @get()
  static getIba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iba",
  })
  @post("{id}")
  static createIba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
