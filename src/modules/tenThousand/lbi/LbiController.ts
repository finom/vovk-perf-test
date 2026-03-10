import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbi")
export default class LbiController {
  @operation({
    summary: "Get Lbi",
  })
  @get()
  static getLbi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbi",
  })
  @post("{id}")
  static createLbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
