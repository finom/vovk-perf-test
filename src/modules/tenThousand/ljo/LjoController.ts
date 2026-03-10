import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljo")
export default class LjoController {
  @operation({
    summary: "Get Ljo",
  })
  @get()
  static getLjo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ljo",
  })
  @post("{id}")
  static createLjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
