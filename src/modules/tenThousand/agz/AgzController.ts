import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agz")
export default class AgzController {
  @operation({
    summary: "Get Agz",
  })
  @get()
  static getAgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agz",
  })
  @post("{id}")
  static createAgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
