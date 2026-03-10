import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aps")
export default class ApsController {
  @operation({
    summary: "Get Aps",
  })
  @get()
  static getAps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aps",
  })
  @post("{id}")
  static createAps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
