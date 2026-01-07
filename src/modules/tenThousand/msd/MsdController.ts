import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msd")
export default class MsdController {
  @operation({
    summary: "Get Msd",
  })
  @get()
  static getMsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msd",
  })
  @post("{id}")
  static createMsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
