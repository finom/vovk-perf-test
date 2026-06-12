import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsu")
export default class LsuController {
  @operation({
    summary: "Get Lsu",
  })
  @get()
  static getLsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsu",
  })
  @post("{id}")
  static createLsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
