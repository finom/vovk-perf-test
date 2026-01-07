import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myo")
export default class MyoController {
  @operation({
    summary: "Get Myo",
  })
  @get()
  static getMyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myo",
  })
  @post("{id}")
  static createMyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
