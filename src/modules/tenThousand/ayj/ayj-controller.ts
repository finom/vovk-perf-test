import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayj")
export default class AyjController {
  @operation({
    summary: "Get Ayj",
  })
  @get()
  static getAyj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayj",
  })
  @post("{id}")
  static createAyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
