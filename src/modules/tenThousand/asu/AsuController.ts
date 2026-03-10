import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asu")
export default class AsuController {
  @operation({
    summary: "Get Asu",
  })
  @get()
  static getAsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Asu",
  })
  @post("{id}")
  static createAsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
