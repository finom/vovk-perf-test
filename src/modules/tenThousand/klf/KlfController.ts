import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klf")
export default class KlfController {
  @operation({
    summary: "Get Klf",
  })
  @get()
  static getKlf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Klf",
  })
  @post("{id}")
  static createKlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
