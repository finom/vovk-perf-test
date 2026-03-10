import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbi")
export default class CbiController {
  @operation({
    summary: "Get Cbi",
  })
  @get()
  static getCbi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbi",
  })
  @post("{id}")
  static createCbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
