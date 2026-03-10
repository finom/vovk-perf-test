import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayn")
export default class AynController {
  @operation({
    summary: "Get Ayn",
  })
  @get()
  static getAyn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayn",
  })
  @post("{id}")
  static createAyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
