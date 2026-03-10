import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnn")
export default class GnnController {
  @operation({
    summary: "Get Gnn",
  })
  @get()
  static getGnn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnn",
  })
  @post("{id}")
  static createGnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
