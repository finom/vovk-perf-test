import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ley")
export default class LeyController {
  @operation({
    summary: "Get Ley",
  })
  @get()
  static getLey = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ley",
  })
  @post("{id}")
  static createLey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
