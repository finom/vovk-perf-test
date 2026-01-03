import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqcs")
export default class DqcController {
  @operation({
    summary: "Get Dqcs",
  })
  @get()
  static getDqcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqc",
  })
  @post("{id}")
  static createDqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
