import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lg")
export default class LgController {
  @operation({
    summary: "Get Lg",
  })
  @get()
  static getLg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lg",
  })
  @post("{id}")
  static createLg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
