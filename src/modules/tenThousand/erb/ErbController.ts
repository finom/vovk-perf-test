import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erb")
export default class ErbController {
  @operation({
    summary: "Get Erb",
  })
  @get()
  static getErb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erb",
  })
  @post("{id}")
  static createErb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
