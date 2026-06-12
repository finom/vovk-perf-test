import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjr")
export default class KjrController {
  @operation({
    summary: "Get Kjr",
  })
  @get()
  static getKjr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjr",
  })
  @post("{id}")
  static createKjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
