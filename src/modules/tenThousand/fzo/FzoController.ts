import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzo")
export default class FzoController {
  @operation({
    summary: "Get Fzo",
  })
  @get()
  static getFzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzo",
  })
  @post("{id}")
  static createFzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
