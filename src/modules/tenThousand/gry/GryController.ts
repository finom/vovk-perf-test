import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gry")
export default class GryController {
  @operation({
    summary: "Get Gry",
  })
  @get()
  static getGry = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gry",
  })
  @post("{id}")
  static createGry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
