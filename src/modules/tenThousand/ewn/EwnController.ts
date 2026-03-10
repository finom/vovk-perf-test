import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewn")
export default class EwnController {
  @operation({
    summary: "Get Ewn",
  })
  @get()
  static getEwn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewn",
  })
  @post("{id}")
  static createEwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
