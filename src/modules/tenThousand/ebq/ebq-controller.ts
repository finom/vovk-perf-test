import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebq")
export default class EbqController {
  @operation({
    summary: "Get Ebq",
  })
  @get()
  static getEbq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebq",
  })
  @post("{id}")
  static createEbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
