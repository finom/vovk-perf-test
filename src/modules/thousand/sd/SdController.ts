import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sd")
export default class SdController {
  @operation({
    summary: "Get Sd",
  })
  @get()
  static getSd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sd",
  })
  @post("{id}")
  static createSd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
