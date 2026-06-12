import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyt")
export default class GytController {
  @operation({
    summary: "Get Gyt",
  })
  @get()
  static getGyt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyt",
  })
  @post("{id}")
  static createGyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
