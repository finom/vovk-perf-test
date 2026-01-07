import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ius")
export default class IusController {
  @operation({
    summary: "Get Ius",
  })
  @get()
  static getIus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ius",
  })
  @post("{id}")
  static createIus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
