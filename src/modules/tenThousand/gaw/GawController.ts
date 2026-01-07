import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaw")
export default class GawController {
  @operation({
    summary: "Get Gaw",
  })
  @get()
  static getGaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gaw",
  })
  @post("{id}")
  static createGaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
