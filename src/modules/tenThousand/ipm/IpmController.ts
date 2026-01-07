import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipm")
export default class IpmController {
  @operation({
    summary: "Get Ipm",
  })
  @get()
  static getIpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipm",
  })
  @post("{id}")
  static createIpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
