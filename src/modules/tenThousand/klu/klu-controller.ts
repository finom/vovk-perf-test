import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klu")
export default class KluController {
  @operation({
    summary: "Get Klu",
  })
  @get()
  static getKlu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Klu",
  })
  @post("{id}")
  static createKlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
