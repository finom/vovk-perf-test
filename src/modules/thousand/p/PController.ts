import { procedure, prefix, get, post, operation } from "vovk";

@prefix("p")
export default class PController {
  @operation({
    summary: "Get P",
  })
  @get()
  static getP = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create P",
  })
  @post("{id}")
  static createP = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
