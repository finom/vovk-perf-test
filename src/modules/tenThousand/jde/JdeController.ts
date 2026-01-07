import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jde")
export default class JdeController {
  @operation({
    summary: "Get Jde",
  })
  @get()
  static getJde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jde",
  })
  @post("{id}")
  static createJde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
