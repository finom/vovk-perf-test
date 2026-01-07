import { procedure, prefix, get, post, operation } from "vovk";

@prefix("era")
export default class EraController {
  @operation({
    summary: "Get Era",
  })
  @get()
  static getEra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Era",
  })
  @post("{id}")
  static createEra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
