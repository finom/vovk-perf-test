import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lo")
export default class LoController {
  @operation({
    summary: "Get Lo",
  })
  @get()
  static getLo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lo",
  })
  @post("{id}")
  static createLo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
