import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mil")
export default class MilController {
  @operation({
    summary: "Get Mil",
  })
  @get()
  static getMil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mil",
  })
  @post("{id}")
  static createMil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
