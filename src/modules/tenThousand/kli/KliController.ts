import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kli")
export default class KliController {
  @operation({
    summary: "Get Kli",
  })
  @get()
  static getKli = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kli",
  })
  @post("{id}")
  static createKli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
