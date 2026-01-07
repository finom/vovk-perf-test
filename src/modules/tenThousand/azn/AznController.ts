import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azn")
export default class AznController {
  @operation({
    summary: "Get Azn",
  })
  @get()
  static getAzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azn",
  })
  @post("{id}")
  static createAzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
