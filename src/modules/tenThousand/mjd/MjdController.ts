import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjd")
export default class MjdController {
  @operation({
    summary: "Get Mjd",
  })
  @get()
  static getMjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjd",
  })
  @post("{id}")
  static createMjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
