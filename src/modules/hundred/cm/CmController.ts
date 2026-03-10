import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cm")
export default class CmController {
  @operation({
    summary: "Get Cm",
  })
  @get()
  static getCm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cm",
  })
  @post("{id}")
  static createCm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
