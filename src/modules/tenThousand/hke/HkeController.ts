import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hke")
export default class HkeController {
  @operation({
    summary: "Get Hke",
  })
  @get()
  static getHke = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hke",
  })
  @post("{id}")
  static createHke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
