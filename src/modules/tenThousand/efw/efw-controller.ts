import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efw")
export default class EfwController {
  @operation({
    summary: "Get Efw",
  })
  @get()
  static getEfw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efw",
  })
  @post("{id}")
  static createEfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
