import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipl")
export default class IplController {
  @operation({
    summary: "Get Ipl",
  })
  @get()
  static getIpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipl",
  })
  @post("{id}")
  static createIpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
