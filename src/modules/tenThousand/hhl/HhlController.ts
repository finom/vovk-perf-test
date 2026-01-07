import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhl")
export default class HhlController {
  @operation({
    summary: "Get Hhl",
  })
  @get()
  static getHhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhl",
  })
  @post("{id}")
  static createHhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
