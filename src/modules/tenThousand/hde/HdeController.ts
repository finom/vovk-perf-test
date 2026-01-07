import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hde")
export default class HdeController {
  @operation({
    summary: "Get Hde",
  })
  @get()
  static getHde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hde",
  })
  @post("{id}")
  static createHde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
