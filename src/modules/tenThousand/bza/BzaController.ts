import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bza")
export default class BzaController {
  @operation({
    summary: "Get Bza",
  })
  @get()
  static getBza = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bza",
  })
  @post("{id}")
  static createBza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
