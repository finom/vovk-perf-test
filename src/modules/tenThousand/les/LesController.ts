import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("les")
export default class LesController {
  @operation({
    summary: "Get Les",
  })
  @get()
  static getLes = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Les",
  })
  @post("{id}")
  static createLes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
