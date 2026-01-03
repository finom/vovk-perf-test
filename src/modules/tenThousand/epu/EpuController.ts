import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epus")
export default class EpuController {
  @operation({
    summary: "Get Epus",
  })
  @get()
  static getEpus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epu",
  })
  @post("{id}")
  static createEpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
