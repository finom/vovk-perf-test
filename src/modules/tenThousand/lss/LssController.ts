import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lss")
export default class LssController {
  @operation({
    summary: "Get Lss",
  })
  @get()
  static getLss = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lss",
  })
  @post("{id}")
  static createLss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
