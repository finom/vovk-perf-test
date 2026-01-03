import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dags")
export default class DagController {
  @operation({
    summary: "Get Dags",
  })
  @get()
  static getDags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dag",
  })
  @post("{id}")
  static createDag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
