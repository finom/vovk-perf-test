import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyj")
export default class EyjController {
  @operation({
    summary: "Get Eyj",
  })
  @get()
  static getEyj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyj",
  })
  @post("{id}")
  static createEyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
