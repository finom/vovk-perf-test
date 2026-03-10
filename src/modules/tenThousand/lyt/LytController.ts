import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyt")
export default class LytController {
  @operation({
    summary: "Get Lyt",
  })
  @get()
  static getLyt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyt",
  })
  @post("{id}")
  static createLyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
