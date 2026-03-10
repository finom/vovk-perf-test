import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gov")
export default class GovController {
  @operation({
    summary: "Get Gov",
  })
  @get()
  static getGov = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gov",
  })
  @post("{id}")
  static createGov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
