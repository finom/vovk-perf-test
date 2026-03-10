import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lao")
export default class LaoController {
  @operation({
    summary: "Get Lao",
  })
  @get()
  static getLao = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lao",
  })
  @post("{id}")
  static createLao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
