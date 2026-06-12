import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fts")
export default class FtsController {
  @operation({
    summary: "Get Fts",
  })
  @get()
  static getFts = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fts",
  })
  @post("{id}")
  static createFts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
