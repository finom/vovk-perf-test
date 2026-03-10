import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adk")
export default class AdkController {
  @operation({
    summary: "Get Adk",
  })
  @get()
  static getAdk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adk",
  })
  @post("{id}")
  static createAdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
