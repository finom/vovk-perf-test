import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lw")
export default class LwController {
  @operation({
    summary: "Get Lw",
  })
  @get()
  static getLw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lw",
  })
  @post("{id}")
  static createLw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
