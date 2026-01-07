import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aud")
export default class AudController {
  @operation({
    summary: "Get Aud",
  })
  @get()
  static getAud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aud",
  })
  @post("{id}")
  static createAud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
