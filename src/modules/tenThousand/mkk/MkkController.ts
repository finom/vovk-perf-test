import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkks")
export default class MkkController {
  @operation({
    summary: "Get Mkks",
  })
  @get()
  static getMkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkk",
  })
  @post("{id}")
  static createMkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
