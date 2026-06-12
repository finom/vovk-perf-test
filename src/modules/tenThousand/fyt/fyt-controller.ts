import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyt")
export default class FytController {
  @operation({
    summary: "Get Fyt",
  })
  @get()
  static getFyt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fyt",
  })
  @post("{id}")
  static createFyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
