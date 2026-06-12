import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrn")
export default class HrnController {
  @operation({
    summary: "Get Hrn",
  })
  @get()
  static getHrn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrn",
  })
  @post("{id}")
  static createHrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
