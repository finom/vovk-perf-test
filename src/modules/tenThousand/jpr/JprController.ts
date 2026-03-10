import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpr")
export default class JprController {
  @operation({
    summary: "Get Jpr",
  })
  @get()
  static getJpr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpr",
  })
  @post("{id}")
  static createJpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
