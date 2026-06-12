import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crb")
export default class CrbController {
  @operation({
    summary: "Get Crb",
  })
  @get()
  static getCrb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Crb",
  })
  @post("{id}")
  static createCrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
