import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibz")
export default class IbzController {
  @operation({
    summary: "Get Ibz",
  })
  @get()
  static getIbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibz",
  })
  @post("{id}")
  static createIbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
