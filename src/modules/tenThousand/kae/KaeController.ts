import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kae")
export default class KaeController {
  @operation({
    summary: "Get Kae",
  })
  @get()
  static getKae = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kae",
  })
  @post("{id}")
  static createKae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
