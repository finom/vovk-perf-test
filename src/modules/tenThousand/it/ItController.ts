import { procedure, prefix, get, post, operation } from "vovk";

@prefix("it")
export default class ItController {
  @operation({
    summary: "Get It",
  })
  @get()
  static getIt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create It",
  })
  @post("{id}")
  static createIt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
