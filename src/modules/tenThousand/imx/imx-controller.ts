import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imx")
export default class ImxController {
  @operation({
    summary: "Get Imx",
  })
  @get()
  static getImx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imx",
  })
  @post("{id}")
  static createImx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
