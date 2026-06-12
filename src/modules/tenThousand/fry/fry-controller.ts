import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fry")
export default class FryController {
  @operation({
    summary: "Get Fry",
  })
  @get()
  static getFry = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fry",
  })
  @post("{id}")
  static createFry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
