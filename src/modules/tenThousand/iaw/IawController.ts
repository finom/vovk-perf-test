import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaw")
export default class IawController {
  @operation({
    summary: "Get Iaw",
  })
  @get()
  static getIaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iaw",
  })
  @post("{id}")
  static createIaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
