import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afo")
export default class AfoController {
  @operation({
    summary: "Get Afo",
  })
  @get()
  static getAfo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afo",
  })
  @post("{id}")
  static createAfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
