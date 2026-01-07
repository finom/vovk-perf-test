import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ah")
export default class AhController {
  @operation({
    summary: "Get Ah",
  })
  @get()
  static getAh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ah",
  })
  @post("{id}")
  static createAh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
