import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("laa")
export default class LaaController {
  @operation({
    summary: "Get Laa",
  })
  @get()
  static getLaa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Laa",
  })
  @post("{id}")
  static createLaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
