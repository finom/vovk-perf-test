import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ima")
export default class ImaController {
  @operation({
    summary: "Get Ima",
  })
  @get()
  static getIma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ima",
  })
  @post("{id}")
  static createIma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
