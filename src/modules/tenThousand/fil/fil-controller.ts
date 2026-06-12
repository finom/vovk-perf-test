import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fil")
export default class FilController {
  @operation({
    summary: "Get Fil",
  })
  @get()
  static getFil = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fil",
  })
  @post("{id}")
  static createFil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
