import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kok")
export default class KokController {
  @operation({
    summary: "Get Kok",
  })
  @get()
  static getKok = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kok",
  })
  @post("{id}")
  static createKok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
