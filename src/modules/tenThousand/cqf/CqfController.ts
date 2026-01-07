import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqf")
export default class CqfController {
  @operation({
    summary: "Get Cqf",
  })
  @get()
  static getCqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqf",
  })
  @post("{id}")
  static createCqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
