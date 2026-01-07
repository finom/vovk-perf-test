import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtz")
export default class JtzController {
  @operation({
    summary: "Get Jtz",
  })
  @get()
  static getJtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtz",
  })
  @post("{id}")
  static createJtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
