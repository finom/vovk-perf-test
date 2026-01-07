import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iar")
export default class IarController {
  @operation({
    summary: "Get Iar",
  })
  @get()
  static getIar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iar",
  })
  @post("{id}")
  static createIar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
