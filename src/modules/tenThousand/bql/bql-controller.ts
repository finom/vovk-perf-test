import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bql")
export default class BqlController {
  @operation({
    summary: "Get Bql",
  })
  @get()
  static getBql = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bql",
  })
  @post("{id}")
  static createBql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
