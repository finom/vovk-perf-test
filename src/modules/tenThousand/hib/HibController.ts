import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hib")
export default class HibController {
  @operation({
    summary: "Get Hib",
  })
  @get()
  static getHib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hib",
  })
  @post("{id}")
  static createHib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
