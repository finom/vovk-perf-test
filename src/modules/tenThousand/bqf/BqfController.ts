import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqf")
export default class BqfController {
  @operation({
    summary: "Get Bqf",
  })
  @get()
  static getBqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqf",
  })
  @post("{id}")
  static createBqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
