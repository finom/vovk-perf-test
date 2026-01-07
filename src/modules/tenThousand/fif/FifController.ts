import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fif")
export default class FifController {
  @operation({
    summary: "Get Fif",
  })
  @get()
  static getFif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fif",
  })
  @post("{id}")
  static createFif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
