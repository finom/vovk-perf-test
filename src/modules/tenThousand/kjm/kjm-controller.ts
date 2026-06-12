import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjm")
export default class KjmController {
  @operation({
    summary: "Get Kjm",
  })
  @get()
  static getKjm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjm",
  })
  @post("{id}")
  static createKjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
