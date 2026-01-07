import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fze")
export default class FzeController {
  @operation({
    summary: "Get Fze",
  })
  @get()
  static getFze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fze",
  })
  @post("{id}")
  static createFze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
