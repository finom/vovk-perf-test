import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bci")
export default class BciController {
  @operation({
    summary: "Get Bci",
  })
  @get()
  static getBci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bci",
  })
  @post("{id}")
  static createBci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
