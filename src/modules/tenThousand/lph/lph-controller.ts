import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lph")
export default class LphController {
  @operation({
    summary: "Get Lph",
  })
  @get()
  static getLph = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lph",
  })
  @post("{id}")
  static createLph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
