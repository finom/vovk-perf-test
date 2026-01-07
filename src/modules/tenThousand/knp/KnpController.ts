import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knp")
export default class KnpController {
  @operation({
    summary: "Get Knp",
  })
  @get()
  static getKnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knp",
  })
  @post("{id}")
  static createKnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
