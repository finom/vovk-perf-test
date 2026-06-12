import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahr")
export default class AhrController {
  @operation({
    summary: "Get Ahr",
  })
  @get()
  static getAhr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahr",
  })
  @post("{id}")
  static createAhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
