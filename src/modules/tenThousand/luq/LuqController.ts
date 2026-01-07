import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luq")
export default class LuqController {
  @operation({
    summary: "Get Luq",
  })
  @get()
  static getLuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luq",
  })
  @post("{id}")
  static createLuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
