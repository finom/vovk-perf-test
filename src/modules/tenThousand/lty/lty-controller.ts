import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lty")
export default class LtyController {
  @operation({
    summary: "Get Lty",
  })
  @get()
  static getLty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lty",
  })
  @post("{id}")
  static createLty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
