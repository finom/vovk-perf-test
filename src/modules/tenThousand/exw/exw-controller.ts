import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exw")
export default class ExwController {
  @operation({
    summary: "Get Exw",
  })
  @get()
  static getExw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exw",
  })
  @post("{id}")
  static createExw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
