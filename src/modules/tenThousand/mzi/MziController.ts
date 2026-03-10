import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzi")
export default class MziController {
  @operation({
    summary: "Get Mzi",
  })
  @get()
  static getMzi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mzi",
  })
  @post("{id}")
  static createMzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
