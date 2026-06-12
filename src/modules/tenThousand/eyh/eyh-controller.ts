import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyh")
export default class EyhController {
  @operation({
    summary: "Get Eyh",
  })
  @get()
  static getEyh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyh",
  })
  @post("{id}")
  static createEyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
