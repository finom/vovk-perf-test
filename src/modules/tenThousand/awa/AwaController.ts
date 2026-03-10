import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awa")
export default class AwaController {
  @operation({
    summary: "Get Awa",
  })
  @get()
  static getAwa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awa",
  })
  @post("{id}")
  static createAwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
