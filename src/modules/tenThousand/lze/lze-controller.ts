import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lze")
export default class LzeController {
  @operation({
    summary: "Get Lze",
  })
  @get()
  static getLze = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lze",
  })
  @post("{id}")
  static createLze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
