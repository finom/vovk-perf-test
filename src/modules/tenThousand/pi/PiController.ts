import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pi")
export default class PiController {
  @operation({
    summary: "Get Pi",
  })
  @get()
  static getPi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pi",
  })
  @post("{id}")
  static createPi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
