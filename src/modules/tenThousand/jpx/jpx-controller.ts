import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpx")
export default class JpxController {
  @operation({
    summary: "Get Jpx",
  })
  @get()
  static getJpx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpx",
  })
  @post("{id}")
  static createJpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
