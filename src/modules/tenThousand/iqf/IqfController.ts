import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqf")
export default class IqfController {
  @operation({
    summary: "Get Iqf",
  })
  @get()
  static getIqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqf",
  })
  @post("{id}")
  static createIqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
