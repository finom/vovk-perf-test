import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqi")
export default class FqiController {
  @operation({
    summary: "Get Fqi",
  })
  @get()
  static getFqi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqi",
  })
  @post("{id}")
  static createFqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
