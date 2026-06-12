import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abh")
export default class AbhController {
  @operation({
    summary: "Get Abh",
  })
  @get()
  static getAbh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Abh",
  })
  @post("{id}")
  static createAbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
