import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzi")
export default class LziController {
  @operation({
    summary: "Get Lzi",
  })
  @get()
  static getLzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzi",
  })
  @post("{id}")
  static createLzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
