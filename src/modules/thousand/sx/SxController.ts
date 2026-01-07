import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sx")
export default class SxController {
  @operation({
    summary: "Get Sx",
  })
  @get()
  static getSx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sx",
  })
  @post("{id}")
  static createSx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
