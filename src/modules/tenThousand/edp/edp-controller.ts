import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edp")
export default class EdpController {
  @operation({
    summary: "Get Edp",
  })
  @get()
  static getEdp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edp",
  })
  @post("{id}")
  static createEdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
