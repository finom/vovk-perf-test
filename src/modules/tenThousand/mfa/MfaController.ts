import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfa")
export default class MfaController {
  @operation({
    summary: "Get Mfa",
  })
  @get()
  static getMfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfa",
  })
  @post("{id}")
  static createMfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
