import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcr")
export default class BcrController {
  @operation({
    summary: "Get Bcr",
  })
  @get()
  static getBcr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcr",
  })
  @post("{id}")
  static createBcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
