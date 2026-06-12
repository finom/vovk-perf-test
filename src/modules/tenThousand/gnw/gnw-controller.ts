import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnw")
export default class GnwController {
  @operation({
    summary: "Get Gnw",
  })
  @get()
  static getGnw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnw",
  })
  @post("{id}")
  static createGnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
