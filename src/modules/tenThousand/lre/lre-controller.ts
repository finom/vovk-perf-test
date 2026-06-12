import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lre")
export default class LreController {
  @operation({
    summary: "Get Lre",
  })
  @get()
  static getLre = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lre",
  })
  @post("{id}")
  static createLre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
