import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eux")
export default class EuxController {
  @operation({
    summary: "Get Eux",
  })
  @get()
  static getEux = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eux",
  })
  @post("{id}")
  static createEux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
