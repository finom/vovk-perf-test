import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjs")
export default class FjsController {
  @operation({
    summary: "Get Fjs",
  })
  @get()
  static getFjs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjs",
  })
  @post("{id}")
  static createFjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
