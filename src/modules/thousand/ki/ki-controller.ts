import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ki")
export default class KiController {
  @operation({
    summary: "Get Ki",
  })
  @get()
  static getKi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ki",
  })
  @post("{id}")
  static createKi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
