import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifq")
export default class IfqController {
  @operation({
    summary: "Get Ifq",
  })
  @get()
  static getIfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifq",
  })
  @post("{id}")
  static createIfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
