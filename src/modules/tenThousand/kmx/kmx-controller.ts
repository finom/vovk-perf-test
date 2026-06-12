import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmx")
export default class KmxController {
  @operation({
    summary: "Get Kmx",
  })
  @get()
  static getKmx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmx",
  })
  @post("{id}")
  static createKmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
