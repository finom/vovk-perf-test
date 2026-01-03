import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrus")
export default class JruController {
  @operation({
    summary: "Get Jrus",
  })
  @get()
  static getJrus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jru",
  })
  @post("{id}")
  static createJru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
