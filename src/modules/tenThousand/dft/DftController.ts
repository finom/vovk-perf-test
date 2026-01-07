import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dft")
export default class DftController {
  @operation({
    summary: "Get Dft",
  })
  @get()
  static getDft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dft",
  })
  @post("{id}")
  static createDft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
