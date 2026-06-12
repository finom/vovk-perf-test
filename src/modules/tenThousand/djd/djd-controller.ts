import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djd")
export default class DjdController {
  @operation({
    summary: "Get Djd",
  })
  @get()
  static getDjd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Djd",
  })
  @post("{id}")
  static createDjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
