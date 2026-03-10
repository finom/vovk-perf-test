import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enf")
export default class EnfController {
  @operation({
    summary: "Get Enf",
  })
  @get()
  static getEnf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enf",
  })
  @post("{id}")
  static createEnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
