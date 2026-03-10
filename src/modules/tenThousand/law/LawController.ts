import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("law")
export default class LawController {
  @operation({
    summary: "Get Law",
  })
  @get()
  static getLaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Law",
  })
  @post("{id}")
  static createLaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
