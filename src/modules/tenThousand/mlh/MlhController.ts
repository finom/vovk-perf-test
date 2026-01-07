import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlh")
export default class MlhController {
  @operation({
    summary: "Get Mlh",
  })
  @get()
  static getMlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlh",
  })
  @post("{id}")
  static createMlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
