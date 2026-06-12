import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpd")
export default class JpdController {
  @operation({
    summary: "Get Jpd",
  })
  @get()
  static getJpd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpd",
  })
  @post("{id}")
  static createJpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
