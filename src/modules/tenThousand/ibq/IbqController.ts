import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibq")
export default class IbqController {
  @operation({
    summary: "Get Ibq",
  })
  @get()
  static getIbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibq",
  })
  @post("{id}")
  static createIbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
