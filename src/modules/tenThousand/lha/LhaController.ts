import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lha")
export default class LhaController {
  @operation({
    summary: "Get Lha",
  })
  @get()
  static getLha = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lha",
  })
  @post("{id}")
  static createLha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
