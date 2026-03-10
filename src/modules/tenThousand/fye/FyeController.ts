import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fye")
export default class FyeController {
  @operation({
    summary: "Get Fye",
  })
  @get()
  static getFye = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fye",
  })
  @post("{id}")
  static createFye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
