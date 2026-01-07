import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axh")
export default class AxhController {
  @operation({
    summary: "Get Axh",
  })
  @get()
  static getAxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axh",
  })
  @post("{id}")
  static createAxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
