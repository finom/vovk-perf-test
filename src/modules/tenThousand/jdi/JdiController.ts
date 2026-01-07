import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdi")
export default class JdiController {
  @operation({
    summary: "Get Jdi",
  })
  @get()
  static getJdi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdi",
  })
  @post("{id}")
  static createJdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
