import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lig")
export default class LigController {
  @operation({
    summary: "Get Lig",
  })
  @get()
  static getLig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lig",
  })
  @post("{id}")
  static createLig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
