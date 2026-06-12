import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dol")
export default class DolController {
  @operation({
    summary: "Get Dol",
  })
  @get()
  static getDol = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dol",
  })
  @post("{id}")
  static createDol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
