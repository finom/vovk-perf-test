import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmx")
export default class GmxController {
  @operation({
    summary: "Get Gmx",
  })
  @get()
  static getGmx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmx",
  })
  @post("{id}")
  static createGmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
