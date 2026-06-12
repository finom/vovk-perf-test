import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lus")
export default class LusController {
  @operation({
    summary: "Get Lus",
  })
  @get()
  static getLus = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lus",
  })
  @post("{id}")
  static createLus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
