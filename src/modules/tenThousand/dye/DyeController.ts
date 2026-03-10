import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dye")
export default class DyeController {
  @operation({
    summary: "Get Dye",
  })
  @get()
  static getDye = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dye",
  })
  @post("{id}")
  static createDye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
