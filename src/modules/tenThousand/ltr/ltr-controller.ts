import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltr")
export default class LtrController {
  @operation({
    summary: "Get Ltr",
  })
  @get()
  static getLtr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ltr",
  })
  @post("{id}")
  static createLtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
