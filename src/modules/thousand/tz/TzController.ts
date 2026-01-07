import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tz")
export default class TzController {
  @operation({
    summary: "Get Tz",
  })
  @get()
  static getTz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tz",
  })
  @post("{id}")
  static createTz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
