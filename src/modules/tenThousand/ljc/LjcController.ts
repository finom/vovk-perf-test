import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljcs")
export default class LjcController {
  @operation({
    summary: "Get Ljcs",
  })
  @get()
  static getLjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljc",
  })
  @post("{id}")
  static createLjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
