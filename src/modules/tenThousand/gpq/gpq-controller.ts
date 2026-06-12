import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpq")
export default class GpqController {
  @operation({
    summary: "Get Gpq",
  })
  @get()
  static getGpq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpq",
  })
  @post("{id}")
  static createGpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
