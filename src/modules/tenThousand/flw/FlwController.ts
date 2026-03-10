import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flw")
export default class FlwController {
  @operation({
    summary: "Get Flw",
  })
  @get()
  static getFlw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Flw",
  })
  @post("{id}")
  static createFlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
