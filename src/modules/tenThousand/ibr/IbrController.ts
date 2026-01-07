import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibr")
export default class IbrController {
  @operation({
    summary: "Get Ibr",
  })
  @get()
  static getIbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibr",
  })
  @post("{id}")
  static createIbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
