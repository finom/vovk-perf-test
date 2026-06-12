import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebg")
export default class EbgController {
  @operation({
    summary: "Get Ebg",
  })
  @get()
  static getEbg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebg",
  })
  @post("{id}")
  static createEbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
