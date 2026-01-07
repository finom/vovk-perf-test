import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ime")
export default class ImeController {
  @operation({
    summary: "Get Ime",
  })
  @get()
  static getIme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ime",
  })
  @post("{id}")
  static createIme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
