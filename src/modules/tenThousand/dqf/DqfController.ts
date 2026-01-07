import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqf")
export default class DqfController {
  @operation({
    summary: "Get Dqf",
  })
  @get()
  static getDqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqf",
  })
  @post("{id}")
  static createDqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
