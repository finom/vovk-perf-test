import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fer")
export default class FerController {
  @operation({
    summary: "Get Fer",
  })
  @get()
  static getFer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fer",
  })
  @post("{id}")
  static createFer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
