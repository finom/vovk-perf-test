import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aml")
export default class AmlController {
  @operation({
    summary: "Get Aml",
  })
  @get()
  static getAml = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aml",
  })
  @post("{id}")
  static createAml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
