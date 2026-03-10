import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aic")
export default class AicController {
  @operation({
    summary: "Get Aic",
  })
  @get()
  static getAic = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aic",
  })
  @post("{id}")
  static createAic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
