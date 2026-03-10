import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agr")
export default class AgrController {
  @operation({
    summary: "Get Agr",
  })
  @get()
  static getAgr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Agr",
  })
  @post("{id}")
  static createAgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
