import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpk")
export default class JpkController {
  @operation({
    summary: "Get Jpk",
  })
  @get()
  static getJpk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpk",
  })
  @post("{id}")
  static createJpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
