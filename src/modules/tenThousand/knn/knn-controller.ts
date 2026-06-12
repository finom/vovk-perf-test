import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knn")
export default class KnnController {
  @operation({
    summary: "Get Knn",
  })
  @get()
  static getKnn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knn",
  })
  @post("{id}")
  static createKnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
