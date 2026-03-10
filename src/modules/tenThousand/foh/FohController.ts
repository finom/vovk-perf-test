import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foh")
export default class FohController {
  @operation({
    summary: "Get Foh",
  })
  @get()
  static getFoh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Foh",
  })
  @post("{id}")
  static createFoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
