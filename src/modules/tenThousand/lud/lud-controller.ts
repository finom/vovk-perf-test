import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lud")
export default class LudController {
  @operation({
    summary: "Get Lud",
  })
  @get()
  static getLud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lud",
  })
  @post("{id}")
  static createLud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
