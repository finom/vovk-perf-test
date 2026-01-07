import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isr")
export default class IsrController {
  @operation({
    summary: "Get Isr",
  })
  @get()
  static getIsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isr",
  })
  @post("{id}")
  static createIsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
