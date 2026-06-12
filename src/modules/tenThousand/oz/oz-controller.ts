import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oz")
export default class OzController {
  @operation({
    summary: "Get Oz",
  })
  @get()
  static getOz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Oz",
  })
  @post("{id}")
  static createOz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
