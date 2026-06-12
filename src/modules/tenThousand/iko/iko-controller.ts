import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iko")
export default class IkoController {
  @operation({
    summary: "Get Iko",
  })
  @get()
  static getIko = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iko",
  })
  @post("{id}")
  static createIko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
