import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amw")
export default class AmwController {
  @operation({
    summary: "Get Amw",
  })
  @get()
  static getAmw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amw",
  })
  @post("{id}")
  static createAmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
