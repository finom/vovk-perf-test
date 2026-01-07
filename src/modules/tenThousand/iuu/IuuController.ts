import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuu")
export default class IuuController {
  @operation({
    summary: "Get Iuu",
  })
  @get()
  static getIuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuu",
  })
  @post("{id}")
  static createIuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
