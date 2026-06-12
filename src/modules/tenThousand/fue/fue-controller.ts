import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fue")
export default class FueController {
  @operation({
    summary: "Get Fue",
  })
  @get()
  static getFue = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fue",
  })
  @post("{id}")
  static createFue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
