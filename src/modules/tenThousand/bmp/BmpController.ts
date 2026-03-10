import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmp")
export default class BmpController {
  @operation({
    summary: "Get Bmp",
  })
  @get()
  static getBmp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bmp",
  })
  @post("{id}")
  static createBmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
