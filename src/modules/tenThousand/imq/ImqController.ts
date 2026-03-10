import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imq")
export default class ImqController {
  @operation({
    summary: "Get Imq",
  })
  @get()
  static getImq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imq",
  })
  @post("{id}")
  static createImq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
