import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzi")
export default class HziController {
  @operation({
    summary: "Get Hzi",
  })
  @get()
  static getHzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzi",
  })
  @post("{id}")
  static createHzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
