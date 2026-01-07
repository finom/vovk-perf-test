import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doq")
export default class DoqController {
  @operation({
    summary: "Get Doq",
  })
  @get()
  static getDoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doq",
  })
  @post("{id}")
  static createDoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
