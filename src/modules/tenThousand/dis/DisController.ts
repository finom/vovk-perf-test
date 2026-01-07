import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dis")
export default class DisController {
  @operation({
    summary: "Get Dis",
  })
  @get()
  static getDis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dis",
  })
  @post("{id}")
  static createDis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
