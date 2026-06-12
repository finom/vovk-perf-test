import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eiv")
export default class EivController {
  @operation({
    summary: "Get Eiv",
  })
  @get()
  static getEiv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eiv",
  })
  @post("{id}")
  static createEiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
