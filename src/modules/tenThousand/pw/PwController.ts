import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pw")
export default class PwController {
  @operation({
    summary: "Get Pw",
  })
  @get()
  static getPw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pw",
  })
  @post("{id}")
  static createPw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
