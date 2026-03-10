import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axp")
export default class AxpController {
  @operation({
    summary: "Get Axp",
  })
  @get()
  static getAxp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axp",
  })
  @post("{id}")
  static createAxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
