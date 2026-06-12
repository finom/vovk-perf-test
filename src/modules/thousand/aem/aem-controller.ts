import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aem")
export default class AemController {
  @operation({
    summary: "Get Aem",
  })
  @get()
  static getAem = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aem",
  })
  @post("{id}")
  static createAem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
