import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aiv")
export default class AivController {
  @operation({
    summary: "Get Aiv",
  })
  @get()
  static getAiv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aiv",
  })
  @post("{id}")
  static createAiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
