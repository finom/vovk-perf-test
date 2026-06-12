import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("boq")
export default class BoqController {
  @operation({
    summary: "Get Boq",
  })
  @get()
  static getBoq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Boq",
  })
  @post("{id}")
  static createBoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
