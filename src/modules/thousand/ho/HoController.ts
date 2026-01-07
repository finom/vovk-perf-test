import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ho")
export default class HoController {
  @operation({
    summary: "Get Ho",
  })
  @get()
  static getHo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ho",
  })
  @post("{id}")
  static createHo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
